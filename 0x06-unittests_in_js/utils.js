class Utils {
  static calculateNumber(type, a, b) {
    const roundA = Math.round(a);
    const roundB = Math.round(b);
    let result = null;
    switch (type) {
      case 'SUM':
        result = roundA + roundB;
        break;
      case 'SUBTRACT':
        result = roundA - roundB;
        break;
      case 'DIVIDE':
        result = roundB === 0 ? 'Error' : roundA / roundB;
        break;
      default:
        return roundA + roundB;
    }

    return result;
  }
}

module.exports = Utils;
