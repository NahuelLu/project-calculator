function add(){
    return [...arguments].reduce((total,number) => {
        return total + number;
    },0)
}
function subtract(num,num1){
    return num - num1;
}
function multiply(){
    return [...arguments].reduce((total,number) => {
        return total *number;
    },1)
}
function divide(num,num1){
    return num/num1;
}
function operate(operator,num,num1){
    return operator(num,num1);
}
//Functions for DOM
function display(){
    const numberContainer = document.querySelector('.numbers-container');
    const buttonsNumber= numberContainer.querySelectorAll('button');
    const operatorsContainer = document.querySelector('.operators-container');
    const buttonsOperators=operatorsContainer.querySelectorAll('.operator');
    const equalsButton= document.querySelector('#equals');
    const clearButton= document.querySelector('#clear');
    //Events Listeners
    buttonsNumber.forEach(button => button.addEventListener("click",displayNumber));
    buttonsOperators.forEach(button=> button.addEventListener('click',selectOperator));
    equalsButton.addEventListener('click',showResults);
    clearButton.addEventListener('click',clearCalculator);
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
function updateDisplay(content){
    const display=document.querySelector(".display");
    if(content===""){
        display.textContent=content;
    }
    display.textContent+=content;
}
function displayNumber(){
    updateDisplay(this.value);
    currentDisplay+=this.value;
}
function updateOperator(operator){
    currentOperator=operator;
}
function updateCurrentNumbers(number){
    currentNumbers.push(number);
}
function selectOperator(){
    updateCurrentNumbers(currentDisplay);
    updateDisplay(this.value);
    clearCurrentDisplay();
    updateOperator(this.value);
}
function showResults(){
    const display=document.querySelector(".display");
    currentNumbers.push(currentDisplay);
    updateDisplayWithResults();
}
function updateDisplayWithResults(){
    const display=document.querySelector(".display");
    if(currentNumbers.length===2){
        display.textContent=results();
        currentDisplay=results();
        currentNumbers=[];
    }
}
let currentDisplay="";
let currentNumbers=[];
let currentOperator="";
function results(){
    if(currentOperator==="+"){
        return operate(add,parseInt(currentNumbers[0]),parseInt(currentNumbers[1]));
    }else if(currentOperator==="-"){
        return operate(subtract,currentNumbers[0],currentNumbers[1]);
    }else if(currentOperator==="*"){
        return operate(multiply,currentNumbers[0],currentNumbers[1]);
    }else{
        return operate(divide,currentNumbers[0],currentNumbers[1]);
    }
}

display();
