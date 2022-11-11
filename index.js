
document.querySelector("#add").addEventListener("click", add)
document.querySelector("#subtract").addEventListener("click", subtract)
document.querySelector("#multiply").addEventListener("click", multiply)
document.querySelector("#divide").addEventListener("click", divide)
document.querySelector("#clear").addEventListener("click", clear)
document.querySelector("#zero").addEventListener("click", zero)

let numberOne = 0
let numberTwo = 0
let sign = ""
let strOne = ""
let strTwo =""

function operate(operator, numOne, numTwo){
  //Set parameters
  numOne = numberOne
  numTwo = numberTwo
  operator = sign

//Conditional statement to determine which operation the user needs
// Function Executed depends on the operator parameter
if(operator === "+"){
  add(numOne,numTwo)
}
else if(operator === "-"){
  subtract(numOne,numTwo)
}
else if(operator === "*"){
  multiply(numOne,numTwo)
}
else if(operator === "/"){
  divide(numOne,numTwo)
}
 }

function add(a, b) {
  a = parseInt(document.querySelector('#inputA').value);
  b = parseInt(document.querySelector('#inputB').value);
  let addVar = a + b;
  console.log(addVar)
	document.querySelector("#result").innerText = addVar;
};

function subtract(a, b) {
  a = parseInt(document.querySelector('#inputA').value);
  b = parseInt(document.querySelector('#inputB').value);
  let subVar = a - b;
  console.log(subVar)
	document.querySelector("#result").innerText = subVar;
};


function multiply(a, b) {
  a = parseInt(document.querySelector('#inputA').value);
  b = parseInt(document.querySelector('#inputB').value);
  let multiVar = a * b;
  console.log(multiVar)
	document.querySelector("#result").innerText = multiVar;
};

function divide(a, b) {
  a = parseInt(document.querySelector('#inputA').value);
  b = parseInt(document.querySelector('#inputB').value);
  let expoVar = a / b;
  console.log(diviVar)
	document.querySelector("#result").innerText = diviVar;
};

function clear() {
	document.querySelector("#result").innerText = "Results";

  //clear variables etc here

  numberOne = 0;
  numberTwo = 0;
};

function zero() {
  document.querySelector("#display").innerText = "0";

  if(numberOne === 0){
    numberOne = 0
    strOne ="0"
  }
  else if(numberOne !== 0){
    numberTwo = 0
    strTwo ="0"
  }
};

function one() {

  //Condition for if the first value === 0
  if(numberOne === 0){
    numberOne = 1
    strOne ="1"
    document.querySelector("#display").innerText = strOne;
  }
  //Condition for if the first value === 0 && the second value === 0
  else if(numberOne === 0 && numberTwo === 0){
    strTwo = "1"
    numberTwo = 1
    document.querySelector("#display").innerText = strTwo;
  
  }
  //Condition for if the first value 1== 0
  else if(numberOne !== 0){
    strTwo.concat("1");
    numberTwo = parseInt(strTwo);
    document.querySelector("#display").innerText = strTwo;
  
  }


};






