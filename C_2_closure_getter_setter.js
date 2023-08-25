function privateVariable (value) {
    
    let _value = value

    return obj = {

        get(){

             return _value;
        },

        set(value){

            _value = value;
       }
    
    }
}

const secretValue = privateVariable(42);
console.log(secretValue.get()); 
secretValue.set(100);
console.log(secretValue.get());