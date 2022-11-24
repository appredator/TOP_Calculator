
let firstOperand = 0
let nextOperand = 0
let displayValue = 0
let lastChar = ''
let symbol = 0

const buttonGroup = document.getElementById("button-group");

const appendOperand = e => { 
  
  const isButton = e.target.nodeName === 'BUTTON';
  
  if(symbol === 0){
  
  if(displayValue === 0)
  {
  if(!isButton){
    return
  }
  else{
  displayValue = e.target.id
  firstOperand = e.target.id
	console.log(displayValue)
  }
  }
  else if (displayValue != 0){
  displayValue = displayValue + e.target.id
  firstOperand = displayValue + e.target.id
	console.log(displayValue)
  }
  document.querySelector('#display').innerText = displayValue
  }
  else if (symbol !== 0){
  //WHAT WE DOIN HERE FOO
  
  operate(symbol, firstOperand, secondOperand)
  
  }
  }
  
buttonGroup.addEventListener("click", appendOperand);


function operate(sym, a, b){

// Use conditional to determine if # of operators and operands are even
/* if (n.length % 2 === 0){
// display results
} */
/* else if (n.length % 2 !== 0){
//parse off and store last character of string
// Do calculation
// Update Display value and firstOperanc
// Show parsed off operator on screen
} */
console.log("The end of the operate function has concluded");
return console.log(n);

}

const display = document.querySelector('#ac')

const clear = e => {
displayValue = 0
firstOperand = 0
nextOperand = 0
lastChar = ''
symbol = 0
console.log("Clear has been called and display Value is " + displayValue)
let clearedVal = displayValue.toString();
document.querySelector('#display').innerText = clearedVal
}
display.addEventListener("click", clear)

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};


function mutliply(a, b) {
return a * b;
};

function divide(a, b) {
	return a / b;
};



operate(displayValue);




































































































//OLD CODE


// document.querySelector("#add").addEventListener("click", add)
// document.querySelector("#subtract").addEventListener("click", subtract)
// document.querySelector("#multiply").addEventListener("click", multiply)
// document.querySelector("#divide").addEventListener("click", divide)
// document.querySelector("#clear").addEventListener("click", clear)
// document.querySelector("#zero").addEventListener("click", zero)

// let numberOne = 0
// let numberTwo = 0
// let sign = ""
// let strOne = ""
// let strTwo =""

// function operate(operator, numOne, numTwo){
//   //Set parameters
//   numOne = numberOne
//   numTwo = numberTwo
//   operator = sign

// //Conditional statement to determine which operation the user needs
// // Function Executed depends on the operator parameter
// if(operator === "+"){
//   add(numOne,numTwo)
// }
// else if(operator === "-"){
//   subtract(numOne,numTwo)
// }
// else if(operator === "*"){
//   multiply(numOne,numTwo)
// }
// else if(operator === "/"){
//   divide(numOne,numTwo)
// }
//  }

// function add(a, b) {
//   a = parseInt(document.querySelector('#inputA').value);
//   b = parseInt(document.querySelector('#inputB').value);
//   let addVar = a + b;
//   console.log(addVar)
// 	document.querySelector("#result").innerText = addVar;
// };

// function subtract(a, b) {
//   a = parseInt(document.querySelector('#inputA').value);
//   b = parseInt(document.querySelector('#inputB').value);
//   let subVar = a - b;
//   console.log(subVar)
// 	document.querySelector("#result").innerText = subVar;
// };


// function multiply(a, b) {
//   a = parseInt(document.querySelector('#inputA').value);
//   b = parseInt(document.querySelector('#inputB').value);
//   let multiVar = a * b;
//   console.log(multiVar)
// 	document.querySelector("#result").innerText = multiVar;
// };

// function divide(a, b) {
//   a = parseInt(document.querySelector('#inputA').value);
//   b = parseInt(document.querySelector('#inputB').value);
//   let expoVar = a / b;
//   console.log(diviVar)
// 	document.querySelector("#result").innerText = diviVar;
// };

// function clear() {
// 	document.querySelector("#result").innerText = "Results";

//   //clear variables etc here

//   numberOne = 0;
//   numberTwo = 0;
// };

// function zero() {
//   document.querySelector("#display").innerText = "0";

//   if(numberOne === 0){
//     numberOne = 0
//     strOne ="0"
//   }
//   else if(numberOne !== 0){
//     numberTwo = 0
//     strTwo ="0"
//   }
// };

// function one() {

//   //Condition for if the first value === 0
//   if(numberOne === 0){
//     numberOne = 1
//     strOne ="1"
//     document.querySelector("#display").innerText = strOne;
//   }
//   //Condition for if the first value === 0 && the second value === 0
//   else if(numberOne === 0 && numberTwo === 0){
//     strTwo = "1"
//     numberTwo = 1
//     document.querySelector("#display").innerText = strTwo;
  
//   }
//   //Condition for if the first value 1== 0
//   else if(numberOne !== 0){
//     strTwo.concat("1");
//     numberTwo = parseInt(strTwo);
//     document.querySelector("#display").innerText = strTwo;
  
//   }


// };






