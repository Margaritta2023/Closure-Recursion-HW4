function createCalculator(operation) {

if(operation === "add")  return function (num1,num2) {
    return num1+num2
}

if(operation === "multiply")  return function (num1,num2) {
    return num1*num2
}
}

const add = createCalculator("add");
console.log(add(3, 5)); 
const multiply = createCalculator("multiply");
console.log(multiply(2, 4));