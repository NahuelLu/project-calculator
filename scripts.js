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
    //Events Listeners
    buttonsNumber.forEach(button => button.addEventListener("click",displayNumber));
    buttonsOperators.forEach(button=> button.addEventListener('click',displayOperator));
    equalsButton.addEventListener('click',showResults);
}
function updateDisplay(content){
    const display=document.querySelector(".display");
    display.textContent+=content;
}
function displayNumber(){
    updateDisplay(this.value);
    currentDisplay+=this.value;
}
function displayOperator(){
    currentNumbers.push(currentDisplay);
    updateDisplay(this.value);
    currentDisplay="";
    currentOperator=this.value;
}
function showResults(){
    const display=document.querySelector(".display");
    currentNumbers.push(currentDisplay);
    display.textContent=results();
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
