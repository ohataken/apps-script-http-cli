module.exports = class {

  static parse(argv) {
    const i = new this(argv); 
    return i.parseCommand();
  }

  constructor(argv) {
    this.index = 0;
    this.argv = argv;
  }

  hasNext() {
    return this.index < this.argv.length;
  }

  isOver() {
    return this.argv.length <= this.index;
  }

  peek() {
    return this.argv[this.index];
  }

  lookahead(n) {
    if (this.index + n < this.argv.length) {
      return this.argv[this.index + n];
    }
  }

  seek() {
    if (this.hasNext()) {
      return this.argv[this.index++];
    }
  }

  parseCommand() {
  }

};
