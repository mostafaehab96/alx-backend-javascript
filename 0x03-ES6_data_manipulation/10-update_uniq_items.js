export default function updateUniqueItems(gorceryMap) {
  if (!(gorceryMap instanceof Map)) throw new Error('Cannot process');

  for (const [key, value] of gorceryMap) {
    if (value === 1) gorceryMap.set(key, 100);
  }
}
