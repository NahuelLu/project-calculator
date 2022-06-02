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
