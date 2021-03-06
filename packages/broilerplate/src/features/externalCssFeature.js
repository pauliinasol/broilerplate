const { OrderedSet } = require("immutable");
const { createFeature } = require("../extend");

module.exports = config =>
  createFeature({
    name: () => "externalCssFeature",
    loaders: () => OrderedSet.of("externalCssLoader")
  });
