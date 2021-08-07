class Memory {
  constructor() {
    this.slots = [];
    this.pointer = 0;
  }

  _initializeSlot(index) {
    this.slots[index] = 0;
  }

  _initializeSlotIfEmpty(index) {
    if (!this.slots[index]) {
      this._initializeSlot(index);
    }
  }

  pointerRight(n = 1) {
    const index = this.pointer + n;
    this._initializeSlotIfEmpty(index);
    this.pointer = index;
  }

  pointerLeft(n = 1) {
    if (this.pointer - 1 < 0) {
      return;
    }
    const index = this.pointer - n;
    this._initializeSlotIfEmpty(index);
    this.pointer = index;
  }

  replaceVal(n) {
    this.slots[this.pointer] = n;
  }

  incValue(n = 1) {
    this.slots[this.pointer] += n;
  }

  decValue(n = 1) {
    this.slots[this.pointer] -= n;
  }

  curValue() {
    return this.slots[this.pointer];
  }

  getSlots() {
    return this.slots;
  }

  getPointer() {
    return this.pointer;
  }

  size() {
    return this.slots.length;
  }
}

module.exports = Memory;
