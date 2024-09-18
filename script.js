const inputField = document.getElementById("number");
const outputField = document.getElementById("output");
const convertButton = document.getElementById("convert-btn");

function convertHandle() {
  // clear the output
  outputField.innerText = "";

  // checking if the input field is empty
  if (inputField.value === "") {
    outputField.innerText = "Please enter a valid number";
    return;
  }
  if (inputField.value < 0) {
    outputField.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if (inputField.value >= 4000) {
    outputField.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  outputField.innerText = integerToRoman(inputField.value).toString();
}

function integerToRoman(num) {
  const romanValues = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  for (let key in romanValues) {
    while (num >= romanValues[key]) {
      roman += key;
      num -= romanValues[key];
    }
  }
  return roman;
}

// Driver code
console.log(integerToRoman(58));
console.log(integerToRoman(1994));

convertButton.addEventListener("click", convertHandle);

// I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, and M = 1000.
// You should have an input element with an id of "number"
// You should have a button element with an id of "convert-btn"
// You should have a div, span or p element with an id of output
// When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number"
// When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1"
// When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999"

// When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX"
// When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI"
// When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX"
// When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII"
// When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX"
