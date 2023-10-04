export default function cleanSet(set, startString) {
  const filtered = [];
  for (const item of set) {
    if (item.startsWith(startString) && startString !== '') {
      filtered.push(item.slice(startString.length));
    }
  }
  return filtered.join('-');
}
