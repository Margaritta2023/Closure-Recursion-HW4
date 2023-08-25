function arraySum(arr){
    
    if(arr.length == 1) return arr[0];
 
    return arr[arr.length-1]+arraySum(arr.slice(0,-1))
}   

console.log(arraySum([1, 2, 3, 4, 5]))