const { OrderedSet } = require("immutable");
const { createFeature } = require("../extend");

module.exports = config =>
  createFeature({
    name: () => "basicOptimizationFeature",
    plugins: () =>
      OrderedSet.of("occurrenceOrderPlugin", "moduleConcatenationPlugin")
  });
