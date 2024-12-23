const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  str: "",
  getLength() {
    this.length = this.chain.length;
    return this.length;
  },

  addLink(value) {
    if (value === "") {
      this.chain.push(`( )`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (
      Number.isInteger(position) &&
      position < this.chain.length &&
      position > 0
    ) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    this.str = this.chain.join("~~");
    this.chain = [];
    return this.str;
  },
};

module.exports = {
  chainMaker,
};
