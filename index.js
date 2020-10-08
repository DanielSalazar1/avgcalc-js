class Calculator {
  constructor() {
    this.numbers = []
  }

  addButton(number) {
    this.numbers.push(number);
  }

  operations() {
    if (this.numbers == 0) {
      return 0;
    }

    var i;
    var sum = 0;
    for (i = 0; i < this.numbers.length; i++) {
      sum += this.numbers[i]

    }
    return sum / this.numbers.length;
  }
}
var calc = new Calculator([]);


function onAddButtonClick() {
  var userInput = parseFloat(document.getElementById("output").value);
  calc.addButton(userInput);
  var result = calc.operations();

  document.getElementById("output").value = result;
  


}
