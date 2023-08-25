function createCounter(){

    let count = 0;

   return  function increment(){
     return count++;
    }
}

const counter = createCounter();

console.log(counter()); 
console.log(counter());