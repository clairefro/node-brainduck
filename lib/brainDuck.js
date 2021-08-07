const Memory = require("./memory");
const getChar = require("../utils/getChar");

class BrainDuck {
  constructor() {
    this.memory = new Memory();
  }

  runItem(char) {
    switch (char) {
      case ".":
        return this._toAscii(this.memory.curVal());
      case ">":
        this.memory.pointerRight();
        break;
      case "<":
        this.memory.pointerLeft();
        break;
      case "+":
        this.memory.incVal();
        break;
      case "-":
        this.memory.decVal();
        break;
      case ",":
        const dec = this._getCharDec();
        this.memory.replaceVal(dec);
        break;

      // TODO
      // case "[":
      // case "]":

      // do nothing by default - ignore chars not represented above
    }
  }

  _toAscii(int) {
    return String.fromCharCode(int);
  }

  _toDec(char) {
    return char.charCodeAt(0);
  }

  _getCharDec() {
    return this._toDec(getChar());
  }

  execute(bfStr) {
    let output = "";

    console.log(`Excuting: "${bfStr}"`);

    const chars = bfStr.split("");

    for (let i = 0; i < chars.length; i++) {
      const out = this.runItem(chars[i]);
      if (!!out) output += out;
    }

    return output;
  }
}

module.exports = BrainDuck;
