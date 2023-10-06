/*Example 3 -Calculator

Create a calculator object with three methods:

- `read(a, b)`- takes two values and stores them as object properties.
- `add()` - returns the sum of the stored values.
- `mult()` - multiplies the stored values and returns the result.
*/

const calculator = {
  firstNumber: 0,
  secondNumber: 0, 

  read(a, b) {
    this.firstNumber = a;
    this.secondNumber = b;
    return `Numbers are: ${this.firstNumber} and ${this.secondNumber}`
  },

  add() {
    const sum = this.firstNumber + this.secondNumber;
    return `Sum is: ${sum}`
  },

  mult() {
    const multiply = this.firstNumber * this.secondNumber;
    return `Multiply is: ${multiply}`
  },
};


console.log(calculator.read(3, 5))
console.log(calculator.add());
console.log(calculator.mult());