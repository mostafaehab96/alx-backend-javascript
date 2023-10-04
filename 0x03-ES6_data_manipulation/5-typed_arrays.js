export default function createInt8TypedArray(length, position, value) {
  const newArr = new ArrayBuffer(length);
  if (newArr.length <= position) {
    throw new Error('Position outside range');
  }
  const view = new DataView(newArr);
  view.setInt8(position, value);

  return view;
}
