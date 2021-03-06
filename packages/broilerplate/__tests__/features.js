/**
 * @jest-environment node
 */

const { getFeature } = require("../src/configure");

test("internal features match", () => {
  const internalFeatures = [
    "assetFeature",
    "babelFeature",
    "basicDevelopmentFeature",
    "basicOptimizationFeature",
    "clientRenderFeature",
    "manifestFeature",
    "externalCssFeature",
    "serverRenderFeature"
  ];

  internalFeatures.forEach(ip => {
    const feature = getFeature(ip);
    expect(typeof feature).toBe("object");
    expect(feature.name()).toEqual(ip);
  });
});
