import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!value) {
      this.chain.push('( null )');
    } else {
      this.chain.push(`( ${String(value)} )`);
    }
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position % 10 !== 0 || !this[position - 1]) {
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return this.chain.join('~~');
  }
};
