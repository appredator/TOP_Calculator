
let firstOperand = 0
let secondOperand = 0
let displayValue = 0
let lastChar = ''
let symbol = 0
let symbolValue = 0

//@@ Appending a digit to first operand is not working. Prob not working for second operand either

//@@ needs to be refactored to use firstOperand values for calc and display instead of display value
// Ive added the display nodes for firstOperand and secondOperand, which have an id of firstDisplay and secondDisplay

//Append Operand method
// Does logic for determining which value to update work?   !@!!!!!!!
const buttonGroup = document.getElementById("button-group");

const appendOperand = e => { 
  
  const isButton = e.target.nodeName === 'BUTTON';
  
  if(firstOperand === 0 && secondOperand === 0 && symbol === 0){
  
  if(firstOperand === 0)
  {
  if(!isButton){
    return
  }
  else{
  displayValue = e.target.id
  firstOperand = e.target.id
	console.log("First and Second Operands and symbol were not set. So, first operand has been changed from 0 and set to " + firstOperand)
  }
  }
  //conditional to append to first operands current value if value has already been updated
  // This isnt working. Using too many different variables. Display value needs to be changed to 2 different concurrent vals
  else if (firstOperand != 0){
  displayValue = displayValue + e.target.id
  firstOperand = firstOperand + e.target.id
	console.log("First operand has been appended because it was not 0. Symbol has not been set. First Operand value is " + firstOperand)
  }
  document.querySelector('#firstDisplay').innerText = firstOperand
  }
  else if (firstOperand !== 0 && secondOperand === 0 && symbol === 0){
  //Append to firstOperand
    if(firstOperand === 0)
  {
  if(!isButton){
    return
  }
  else{
  displayValue = firstOperand + e.target.id
  firstOperand = firstOperand + e.target.id
	console.log("First Operand was set and symbol was not. So, first operand has had the value appended. Now set to " + firstOperand)
  }
  }
  //conditional to append to first operands current value if value has already been updated
  else if (firstOperand != 0){
  displayValue = displayValue + e.target.id
  firstOperand = firstOperand + e.target.id
	console.log("First operand has been appended because it was not 0. Symbol has not been set. First Operand value is " + firstOperand)
  }
  document.querySelector('#firstDisplay').innerText = firstOperand
  }
  //Split to next condition
  else if (firstOperand !== 0 && secondOperand === 0 && symbol !== 0){
  //Update Second operand 
  if(secondOperand === 0)
  {
  if(!isButton){
    return
  }
  else{
  displayValue = e.target.id
  secondOperand = e.target.id
	console.log("First Operand and symbol were already set. So, second operand has been changed from 0 and set to " + secondOperand)
  }
  }
  //conditional to append to second operands current value if value has already been updated
  else if (secondOperand != 0){
  displayValue = displayValue + e.target.id
  secondOperand = secondOperand + e.target.id
  console.log("First and Second Operand and the symbol were already set. So, second operand has had the value appended and set to " + secondOperand)
  }
  document.querySelector('#secondDisplay').innerText = secondOperand
  }
  //Split to next condition
  else if (firstOperand !== 0 && secondOperand !== 0 && symbol !== 0){
    //Update Second operand 
    if(secondOperand === 0)
    {
    if(!isButton){
      return
    }
    else{
    displayValue = e.target.id
    secondOperand = e.target.id
    console.log("First Operand and symbol were already set. So, second operand has been changed from 0 and set to " + secondOperand)
    }
    }
    //conditional to append to second operands current value if value has already been updated
    else if (secondOperand != 0){
    displayValue = displayValue + e.target.id
    secondOperand = secondOperand + e.target.id
    console.log("First and Second Operand and the symbol were already set. So, second operand has had the value appended and set to " + secondOperand)
    }
    document.querySelector('#secondDisplay').innerText = secondOperand
    }
  }
buttonGroup.addEventListener("click", appendOperand);

//Update Symbol  
const symbolGroup = document.getElementById("symbols-group");

const updateSymbol = e => { 
  
  const isButton = e.target.nodeName === 'BUTTON';

  if(firstOperand !== 0 && secondOperand === 0 && symbol === 0){
  //if first operand is present, but symbol and second operands are not present, update the symbol
  if(!isButton){
    return
  }
  else{
  symbol = e.target.id
  symbolValue = e.target.id
  document.querySelector('#symbolDisplay').innerText = symbolValue
	console.log("Symbol value updated to be " + symbolValue)
  }
  }
  else if (firstOperand != 0 && secondOperand === 0 && symbol !== 0){
    //if symbol and first operand are present and second operand is blank, tell them to enter a value for second operand
  alert("You already have a symbol selected for the operation with your first operand. Please enter a value for the second operand.")
  }
  else if (firstOperand != 0 && secondOperand !== 0 && symbol !== 0){
    //if symbol and first and second operands are present, tell them to press equals
    alert("You already have a symbol selected for the operation with your first and second operand. Please press the equals button if you are ready to calculate.")
    }
  }
symbolGroup.addEventListener("click", updateSymbol);

//Call when equals button is pressed.
document.querySelector('#equals').addEventListener('click', operate())
// non const approach
function operate(sym, a, b){

  sym = symbol

  a = firstOperand

  b = secondOperand

  if (sym == "+"){

  displayValue = add(a,b)

  document.querySelector('#display').innerText =  displayValue 
  }
  else if(sym == "-"){

  displayValue =  subtract(a, b)

  document.querySelector('#display').innerText =  displayValue 
  }
  else if( sym == "/"){

  displayValue =  divide(a, b)

  document.querySelector('#display').innerText =  displayValue 
  }
  else if( sym == "*"){

  displayValue =  mutliply(a, b)

  document.querySelector('#display').innerText =  displayValue 
  }

console.log("The end of the operate function has concluded");
return console.log(displayValue);

}

//Const approach

// const equals = document.querySelector('#=')

// const operate = e => {
// displayValue = 0
// firstOperand = 0
// nextOperand = 0
// lastChar = ''
// symbol = 0
// console.log("Clear has been called and display Value is " + displayValue)
// let clearedVal = displayValue.toString();
// document.querySelector('#display').innerText = clearedVal
// }
// equals.addEventListener("click", clear)

const display = document.querySelector('#ac')

const clear = e => {
displayValue = 0
firstOperand = 0
nextOperand = 0
lastChar = ''
symbol = 0
// console.log("Clear has been called and display Value is " + displayValue)
let clearedVal = displayValue.toString();
document.querySelector('#firstDisplay').innerText = 0
document.querySelector('#secondDisplay').innerText = 0
document.querySelector('#symbolDisplay').innerText = 0
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





































































































