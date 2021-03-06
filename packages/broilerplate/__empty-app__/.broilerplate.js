const path = require("path");
const util = require("util");
const {
  pipe,
  initialize,
  ensureFiles,
  defaultFeatures,
  mergePaths,
  defaultPaths,
  addFeature,
  removeFeature,
  removeLoader,
  removePlugin,
  removeLoaders,
  removePlugins,
  defaultBaseConfig,
  compile,
  override,
  run,
  toJS
} = require("../src/broilerplate");

const dotenv = require("dotenv");
dotenv.config();

const { Map } = require("immutable");

module.exports = target => {
  const env = process.env.NODE_ENV;

  const config = pipe(
    defaultPaths(env, target, __dirname),
    mergePaths(
      Map({
        modules: path.resolve(__dirname, "../node_modules")
      })
    ),
    defaultBaseConfig(env, target),
    defaultFeatures,
    removeFeature("pekkisHybridCssFeature"),
    // removePlugins("copyFilesPlugin", "manifestPlugin", "uglifyPlugin"),
    // removePlugin("copyFilesPlugin"),
    // removeLoaders("imageLoader", "fontLoader", "babelLoader"),
    // removeLoader("imageLoader"),
    // removeLoader("fontLoader"),
    ensureFiles(false),
    compile(env, target),
    // override(path.join(__dirname, "./src/config/overrides")),
    run,
    toJS
  )(Map());

  // console.log("config", util.inspect(config, { depth: 666 }));
  return config;
};
