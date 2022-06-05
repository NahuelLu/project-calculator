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

buttonsNumber.forEach(button => button.addEventListener("click",displayNumber));
buttonsOperators.forEach(button=> button.addEventListener('click',selectOperator));
equalsButton.addEventListener('click',showResults);
clearButton.addEventListener('click',clearCalculator);
decimalButton.addEventListener('click',displayDecimal);
undoButton.addEventListener('click',undoNumber);

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
    if(content===""){
        display.textContent=content;
    }
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
function displayNumber(){
    if(currentOperator==="" && currentNumbers.length !==0)
        clearCalculator();

    updateDisplay(this.value);
    currentDisplay+=this.value;
}

function selectOperator(){
    updateCurrentNumbers(currentDisplay);
    updateDisplay(this.value);
    clearCurrentDisplay();
    updateOperator(this.value);
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
function displayError(message){
    alert(message);
}
function results(){
    let number1=Number(currentNumbers[0]);
    let number2=Number(currentNumbers[1]);
    if(currentOperator==="+"){
        return operate(add,number1,number2);
    }else if(currentOperator==="-"){
        return operate(subtract,number1,number2);
    }else if(currentOperator==="*"){
        return operate(multiply,number1,number2);
    }else{
        if(number2==0){
            displayError("You can divide with 0 dummy!!");
            return 0;
        }
        return operate(divide,number1,number2);
    }
}
