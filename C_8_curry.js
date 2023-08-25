function curry(f) { 
    return function(...a) {
      return function(...b) {
        return function(c){
        return f(a, b, c);
      };
     };
    };
  }
  

  function add(a, b, c) {
    return a + b + c;
  }



const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); 
console.log(curriedAdd(1, 2)(3)); 
console.log(curriedAdd(1, 2, 3));