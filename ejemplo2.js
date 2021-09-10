module.exports = (value) => {
  return value - (Math.trunc(value / 4) * 2 - 1);
};
