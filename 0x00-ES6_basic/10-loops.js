export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const value of array) {
    /* eslint-disable */
    array[i] = appendString + value;
    /* eslint-enable */
    i += 1;
  }

  return array;
}
