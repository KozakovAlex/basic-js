import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  counter = 1;
  calculateDepth(arr) {
    let newArr = arr.filter(item => Array.isArray(item));
    if (newArr.length == 0) {
      return this.counter;
    } else {
      this.counter++;
      let concatArr = [];
      return this.calculateDepth(concatArr.concat(...newArr));
    }
  }
}
