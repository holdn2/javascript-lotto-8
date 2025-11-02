import { MARK } from '../constant/mark.js';

export function sortAscending(array) {
  return [...array].sort((a, b) => a - b);
}

export function parseNumbers(inputString, delimiter = MARK.DELIMITER) {
  const stringArray = inputString.split(delimiter);
  return stringArray.map(Number);
}
