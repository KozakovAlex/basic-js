import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) return new Error('\'arr\' parameter must be an instance of the Array!');
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      i++
    } else if (arr[i] == '--discard-prev') {
      resultArr.splice(i - 1, 1);
    } else if (arr[i] == '--double-next') {
      if (arr[i + 1]) {
        resultArr[i] = arr[i + 1];
      } else {
        resultArr[i] = '';
      }
    } else if (arr[i] == '--double-prev') {
      if (arr[i - 2] == '--discard-next') {
        resultArr[i] = '';
      } else if (arr[i - 1]) {
        resultArr[i] = arr[i - 1];
      } else {
        resultArr[i] = '';
      }
    } else {
      resultArr[i] = arr[i];
    }
  }
  return resultArr.filter(item => item !== '');
}
