class LogicalOperations {
  constructor(bool1, bool2) {
    this.bool1 = bool1;

    this.bool2 = bool2;
  }

  andOperation() {
    return this.bool1 && this.bool2;
  }

  orOperation() {
    return this.bool1 || this.bool2;
  }

  notAndOperation() {
    return this.bool1 && !this.bool2;
  }

  notOrOperation() {
    return this.bool1 || !this.bool2;
  }

  getResults() {
    return {
      andResult: this.andOperation(),

      orResult: this.orOperation(),

      notAndResult: this.notAndOperation(),

      notOrResult: this.notOrOperation(),
    };
  }
}

const bool1 = true;

const bool2 = false;

const operations = new LogicalOperations(bool1, bool2);

const results = operations.getResults();

console.log(results);
