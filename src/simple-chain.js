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
    if (value === '') {
      this.chain.push('( )');
    } else if (value === null) {
      this.chain.push(`( null )`)
    } else if (value === 0) {
      this.chain.push(`( 0 )`)
    } else {
      this.chain.push(`( ${String(value)} )`);
    }
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position - Math.trunc(position) !== 0 || !this.chain[position - 1]) {
      this.chain.length = 0;
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
    const str = this.chain.join('~~');
    this.chain.length = 0;
    return str;
  }
};
