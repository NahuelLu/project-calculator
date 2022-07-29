"use strict"
const calculator = (()=>{
    let currentDisplay="";
    let currentNumbers=[];
    let currentOperator="";
    const updateDisplay=(content)=>{
        if(content==="") display.textContent=content;
        display.textContent+=content;
    }
    const updateOperator=(operator)=>{
        currentOperator=operator;
    }
    const clearCurrentDisplay=()=>{
        currentDisplay="";
    }
    const _updateCurrentNumbers=(number)=>{
        currentNumbers.push(number);
    }
    const _updateDisplayWithResults=()=>{
        if(currentNumbers.length===2 && currentOperator!==""){
            display.textContent=_results();
            currentDisplay=_results();
            currentNumbers=[];
        }else{
            currentNumbers=[];
        }
    }
    const _add = (num, num1) => num +num1;
    const _subtract = (num,num1) => num - num1;
    const _multiply = (num,num1) => num * num1;
    const _divide = (num,num1) => num / num1;
    const _operate = (operator,num,num1) => operator(num,num1);
    const _results=()=>{
        let number1=Number(currentNumbers[0]);
        let number2=Number(currentNumbers[1]);
        switch(currentOperator){
            case "+":
                return _operate(_add,number1,number2);
            case "-":
                return _operate(_subtract,number1,number2);
            case "*":
                return _operate(_multiply,number1,number2);
            case "/":
                return _operate(_divide,number1,number2);
            default:
                break;
        }
    }
    const clearCalculator = ()=>{
        updateDisplay("");
        clearCurrentDisplay();
        currentNumbers=[];
        currentOperator="";
    }
    const showResults = ()=>{
        if(currentDisplay!==""){
            _updateCurrentNumbers(currentDisplay);
            _updateDisplayWithResults();
        }
    }
    const selectOperator = (operator)=> {
        _updateCurrentNumbers(currentDisplay);
        updateDisplay(operator);
        clearCurrentDisplay();
        updateOperator(operator);
    }
    const displayNumber= (number)=>{
        if(currentOperator==="" && currentNumbers.length !==0) clearCalculator();
        updateDisplay(number);
        currentDisplay+=number;
    }
    const displayDecimal = (decimal)=>{
        updateDisplay(decimal);
        currentDisplay+=decimal;
    }
    const undoNumber= ()=> {
        display.textContent=display.textContent.slice(0, -1);
        currentDisplay=currentDisplay.slice(0,-1);
    }
    return {
        clearCalculator,
        showResults,
        selectOperator,
        displayNumber,
        displayDecimal,
        undoNumber
    }
})();

const display=document.querySelector(".display");
const buttonsNumber= document.querySelectorAll('.number');
const buttonsOperators=document.querySelectorAll('.operator');
const equalsButton= document.querySelector('#equals');
const clearButton= document.querySelector('#clear');
const decimalButton= document.querySelector('#decimal-point');
const undoButton= document.querySelector('#undo');

buttonsNumber.forEach(button => button.addEventListener('click',() => calculator.displayNumber(button.value)));
buttonsOperators.forEach(button => button.addEventListener('click',() => calculator.selectOperator(button.value)));
equalsButton.addEventListener('click',calculator.showResults);
clearButton.addEventListener('click',calculator.clearCalculator);
decimalButton.addEventListener('click',()=> calculator.displayDecimal(decimalButton.value));
undoButton.addEventListener('click',calculator.undoNumber);
window.addEventListener('keydown',ev => pressKey(ev.key));
function pressKey(key){
    if(!isNaN(key)) calculator.displayNumber(key);
    if(isOperator(key)) calculator.selectOperator(key);
    //Also i can do this with switch statement for avoiding create more functions
    if(isUndo(key)) calculator.undoNumber();
    if(isEquals(key)) calculator.showResults();
    if(isDecimal(key)) calculator.displayDecimal(key);
}
function isOperator(key){
    return key==="/" || key==="*" || key==="+" || key==="-" ;
}
function isDecimal(key){
    return key === ".";
}
function isEquals(key){
    return key==="Enter";
}
function isUndo(key){
    return key==="Backspace";
}
