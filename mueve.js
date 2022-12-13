// Define the functions for the calculator operations
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  
  
  // Display the result
  function calculate() {
    // Get the input values from the form
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  
  // Get the selected operation from the form
  var operation = document.getElementById('operation').value;
  
  // Define a variable to hold the result
  var result;
  
  // Use a switch statement to determine which operation to perform
  switch (operation) {
    case 'add':
      result = add(num1, num2);
      break;
    case 'subtract':
      result = subtract(num1, num2);
      break;
    case 'multiply':
      result = multiply(num1, num2);
      break;
    case 'divide':
      result = divide(num1, num2);
      break;
    default:
      // If an invalid operation is selected, set the result to NaN (not a number)
      result = NaN;
  }
    document.getElementById('result').innerHTML = result;

  }
  