function add(a, b, c) {
    return a + b + c;
    }

function partial(add,num) {
       
    return function (num1, num2){

        return add(num, num1, num2);
    }
}


const add5 = partial(add, 5);
console.log(add5(10, 20));