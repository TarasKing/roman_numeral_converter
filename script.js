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
    // console.log("key:", key);
    while (num >= romanValues[key]) {
      //   console.log("roman:", roman);
      roman += key;
      //   console.log("romanValues[key]:", romanValues[key]);
      //   console.log("num", num);

      num -= romanValues[key];
    }
  }
  return roman;
}

// Driver code
console.log(integerToRoman(58));
console.log(integerToRoman(1994));

convertButton.addEventListener("click", convertHandle);
