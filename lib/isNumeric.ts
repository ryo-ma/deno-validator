const numeric: RegExp = /^[+-]?([0-9]*[.])?[0-9]+$/;
const numericNoSymbols: RegExp = /^[0-9]+$/;
export function isNumeric(str: string) {
  return numeric.test(str);
}
