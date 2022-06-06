let currentDisplay="";
let currentNumbers=[];
let currentOperator="";
let result="";

const display=document.querySelector(".display");
const numberContainer = document.querySelector('.numbers-container');
const buttonsNumber= numberContainer.querySelectorAll('button');
const operatorsContainer = document.querySelector('.operators-container');
const buttonsOperators=operatorsContainer.querySelectorAll('.operator');
const equalsButton= document.querySelector('#equals');
const clearButton= document.querySelector('#clear');
const decimalButton= document.querySelector('#decimal-point');
const undoButton= document.querySelector('#undo');

buttonsNumber.forEach(button => button.addEventListener('click',() => displayNumber(button.value)));
buttonsOperators.forEach(button => button.addEventListener('click',() => selectOperator(button.value)));
equalsButton.addEventListener('click',showResults);
clearButton.addEventListener('click',clearCalculator);
decimalButton.addEventListener('click',displayDecimal);
undoButton.addEventListener('click',undoNumber);
window.addEventListener('keydown',ev => pressKey(ev.key));
function pressKey(key){
    if(!isNaN(key)) displayNumber(key);
    if(isOperator(key)) selectOperator(key);
}
function isOperator(key){
    return key==="/" || key==="*" || key==="+" || key==="-" ;
}
function add(){
    return num + num1;
}
function subtract(num,num1){
    return num - num1;
}
function multiply(num,num1){
    return num*num1;
}
function divide(num,num1){
    return num/num1;
}
function operate(operator,num,num1){
    return operator(num,num1);
}
function undoNumber(){
    toString(display.textContent).slice(0, -1);
}
function displayDecimal(){
    updateDisplay(".");
    currentDisplay+=this.value;
}
function updateDisplay(content){
    if(content==="") display.textContent=content;
    display.textContent+=content;
}
function updateOperator(operator){
    currentOperator=operator;
}
function updateCurrentNumbers(number){
    currentNumbers.push(number);
}
function clearCurrentDisplay(){
    currentDisplay="";
}
function clearCalculator(){
    updateDisplay("");
    clearCurrentDisplay();
    currentNumbers=[];
    currentOperator="";
}
function displayNumber(number){
    if(currentOperator==="" && currentNumbers.length !==0) clearCalculator();
    updateDisplay(number);
    currentDisplay+=number;
}

function selectOperator(operator){
    updateCurrentNumbers(currentDisplay);
    updateDisplay(operator);
    clearCurrentDisplay();
    updateOperator(operator);
}
function showResults(){
    if(currentDisplay!==""){
        updateCurrentNumbers(currentDisplay);
        updateDisplayWithResults();
    }
}
function updateDisplayWithResults(){
    if(currentNumbers.length===2 && currentOperator!==""){
        display.textContent=results();
        currentDisplay=results();
        currentNumbers=[];
    }else{
        currentNumbers=[];
    }
}
function results(){
    let number1=Number(currentNumbers[0]);
    let number2=Number(currentNumbers[1]);
    switch (currentOperator) {
        case "+":
            return operate(add,number1,number2);
        case "-":
            return operate(subtract,number1,number2);
        case "*":
            return operate(multiply,number1,number2);
        case "/":
            return operate(divide,number1,number2);
        default:
            break;
    }
    
}
