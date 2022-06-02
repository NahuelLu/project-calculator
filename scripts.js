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
function display(){
    const numberContainer = document.querySelector('.numbers-container');
    const buttonsNumber= numberContainer.querySelectorAll('button');
    buttonsNumber.forEach(button => button.addEventListener("click",displayNumbers));
}
function displayNumbers(){
    const display=document.querySelector(".display");
    display.textContent+=this.value;
    number+=this.value;
}
display();
