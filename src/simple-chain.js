const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],
  str:"",
  getLength() {
    this.length=this.chain.length;
return this.length;
  },

  addLink(value) {
    if(value===""){
      this.chain.push(`( )`);
    } else {
      this.chain.push(`( ${value} )`);
    }
return this;
  },

  removeLink(position) {
    try {
      if((Number.isInteger(position))&&(position<this.chain.length)&&(position>0)){
      this.chain.splice(position-1,1);
      return this;
        } else {
          throw new Error("Error");
        }
    } catch(err) {
      this.chain=[];
      return this;
    }
  },

  reverseChain() {
this.chain.reverse();
return this;
  },

  finishChain() {
this.str=this.chain.join("~~");
this.chain=[];
return this.str;
  }
};

module.exports = chainMaker;
