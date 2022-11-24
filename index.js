
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
  
  if(symbol === 0 && firstOperand === 0 && secondOperand === 0){
  
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
  //conditional to append to first operands current value if value has already been updated
  // This isnt working. Using too many different variables. Display value needs to be changed to 2 different concurrent vals
  else if (displayValue != 0){
  displayValue = displayValue + e.target.id
  firstOperand = displayValue + e.target.id
	console.log(displayValue)
  }
  document.querySelector('#display').innerText = displayValue
  }
  else if (symbol !== 0 && firstOperand !== 0 && secondOperand === 0){
  //Update Second operand and then run operate
  if(secondOperand === 0)
  {
  if(!isButton){
    return
  }
  else{
  displayValue = e.target.id
  secondOperand = e.target.id
	console.log(displayValue)
  }
  }
  //conditional to append to second operands current value if value has already been updated
  else if (secondOperand != 0){
  displayValue = displayValue + e.target.id
  secondOperand = displayValue + e.target.id
	console.log(displayValue)
  }
  document.querySelector('#display').innerText = displayValue
  operate(symbol, firstOperand, secondOperand)
  
  }

  else if (symbol !== 0 && firstOperand !== 0 && secondOperand !== 0){
    // Tell them to press equals
    

    
    }
  }
buttonGroup.addEventListener("click", appendOperand);

//Update Symbol  
const symbolGroup = document.getElementById("symbols-group");

const updateSymbol = e => { 
  
  const isButton = e.target.nodeName === 'BUTTON';

  if(secondOperand === 0 && symbol === 0 && firstOperand !== 0){
  //if first operand is present, but symbol and second operands are not present, update the symbol

  if(!isButton){
    return
  }
  else{
  symbol = e.target.id
  symbolValue = e.target.id
  document.querySelector('#symbolDisplay').innerText = symbolValue
	console.log("Symbol value updated to be " + symbolValue)
  }}

  else if (symbol !== 0 && secondOperand === 0){
    //if symbol and first operand are present and second operand is blank, tell them to enter a value for second operand
  alert("You already have a symbol selected for the operation with your first operand. Please enter a value for the second operand.")
  }
  else if (symbol !== 0 && secondOperand !== 0 && firstOperand !== 0){
    //if symbol and first and second operands are present, tell them to press equals
    alert("You already have a symbol selected for the operation with your first and second operand. Please press the equals button if you are ready to calculate.")
    }
  }
  
symbolGroup.addEventListener("click", updateSymbol);


document.querySelector('#equals').addEventListener('click', operate(symbol, firstOperand, secondOperand))
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



// operate(displayValue);




































































































