
let firstOperand = 0
let secondOperand = 0
let displayValue = 0
let symbol = 0
let symbolValue = 0

//Append Operand method
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
  else if (firstOperand != 0 && secondOperand !== 0 && symbol !== 0 && e.target.id === "-" || e.target.id === "+" || e.target.id === "*" || e.target.id === "*"){
   //This is the part that catches if all 3 conditions are filled 
   //and you hit a symbol, it should do the first calculation and update
   //firstOperand display and secondOperand display and symbol with the
   //pressed symnbol
   //
   //@@@@@@@@@@@@@@@@@@@@
   //!!!!!!!!!!!!!!!!!
   /////

   /////

   /////
    operate()
    firstOperand = displayValue
    symbol = e.target.id
    secondOperand = 0
    document.querySelector('#firstDisplay').innerText = firstOperand
    document.querySelector('#secondDisplay').innerText = secondOperand
    document.querySelector('#display').innerText = displayValue
    document.querySelector('#symbolDisplay').innerText = e.target.id
    console.log("You've entered another symbol. First and Second Operand and the symbol were already set. So, results are " + displayValue)
    }
  }
symbolGroup.addEventListener("click", updateSymbol);

const display = document.querySelector('#ac')

const clear = e => {
displayValue = 0
firstOperand = 0
nextOperand = 0
lastChar = ''
symbol = 0
// console.log("Clear has been called and display Value is " + displayValue)
document.querySelector('#firstDisplay').innerText = 0
document.querySelector('#secondDisplay').innerText = 0
document.querySelector('#symbolDisplay').innerText = 0
document.querySelector('#display').innerText = 0
}
display.addEventListener("click", clear)

//Calls are below for when equals button is pressed.
const equalsVar = document.querySelector("#equals") 

const operate = e => {
  if (symbol === "+"){

    displayValue = add(firstOperand,secondOperand)
  
    document.querySelector('#display').innerText =  displayValue 
  
    console.log("Add function has been called from operate");
    }
    else if(symbol === "-"){
  
    displayValue =  subtract(firstOperand,secondOperand)
  
    document.querySelector('#display').innerText =  displayValue 
  
    console.log("Subtraction function has been called from operate");
    }
    else if(symbol === "/"){
  
    displayValue =  divide(firstOperand,secondOperand)
  
    document.querySelector('#display').innerText =  displayValue 
  
    console.log("Divide function has been called from operate");
    }
    else if(symbol === "*"){
  
    displayValue =  mutliply(firstOperand,secondOperand)
  
    document.querySelector('#display').innerText =  displayValue 
  
    console.log("Multiply function has been called from operate");
    }
    firstOperand = 0
    secondOperand = 0
    // displayValue = 0
    symbol = 0
    symbolValue = 0

    document.querySelector('#firstDisplay').innerText = firstOperand
    document.querySelector('#secondDisplay').innerText = secondOperand
    // document.querySelector('#display').innerText = displayValue
    document.querySelector('#symbolDisplay').innerText = symbol

  console.log("The end of the operate function has concluded");

}
equalsVar.addEventListener("click", operate)

function add(a, b) {
let addHolder= parseInt(a) + parseInt(b)
let add = addHolder.toFixed(2);
	return add;
};

function subtract(a, b) {
let subHolder = parseInt(a) - parseInt(b)
let sub = subHolder.toFixed(2)
	return sub;
};

function mutliply(a, b) {
let multiHolder= parseInt(a) * parseInt(b)
let multi = multiHolder.toFixed(2)
	return multi;
};

function divide(a, b) {
	let divideHolder= parseInt(a) / parseInt(b)
  let divide = divideHolder.toFixed(2)
	return divide;
};
















































































