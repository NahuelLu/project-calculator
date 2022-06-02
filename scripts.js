function add(){
    return [...arguments].reduce((total,number) => {
        return total + number;
    },0)
}