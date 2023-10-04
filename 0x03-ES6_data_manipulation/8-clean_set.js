export default function cleanSet(set, startString) {
  const filtered = [];
  if (startString === '' || typeof startString !== 'string') return '';
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      filtered.push(item.slice(startString.length));
    }
  }
  return filtered.join('-');
}
