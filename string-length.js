function stringLength(str) {
  if (str.length === 0) {
    throw new Error('Too Short');
  }
  if (str.length > 10) {
    throw new Error('Too Long');
  }
  return str.length;
}
module.exports = stringLength;