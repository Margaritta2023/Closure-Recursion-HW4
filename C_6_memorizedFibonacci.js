function fibonacci(n) {

    let fibonacci = 0;
    let previous = 1;
    let next = 1;

    if(n ==0 ) return 0;

    if(n == 1 || n == 2) return 1;

    for(let i = 3; i <= n ; i++) {
      
      fibonacci = previous + next;
      let temporary = next;
      next = fibonacci;
      previous = temporary;
    }
 
    return fibonacci;
}

function memoize(fibonacci){

    let fibonacciObj={};

    return function (num) {

        if(fibonacciObj[num]) return `${fibonacciObj[num]} (cached)`;

        else {
            fibonacciObj[num] = fibonacci(num)
            return `${fibonacci(num)} (calculated)`;
        }

    }
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); 
console.log(memoizedFibonacci(10));