function createCachingFunction(){

    let obj = {};

    return function cachedCalculation(value) {
       
        if(obj[value]) return `${obj[value]} (cached)` ;

        else {
            obj[value] = +value * 2 ;
         
            return  `${obj[value]} (calculated)` 
        }
    }
}

const cachedCalculation = createCachingFunction();
console.log(cachedCalculation(5)); 
console.log(cachedCalculation(5));