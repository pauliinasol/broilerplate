const pipe = (...funcs) => {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduceRight((a, b) => (...args) => a(b(...args)));
};

module.exports = pipe;
