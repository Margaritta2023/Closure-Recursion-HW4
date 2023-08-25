function countOccurrences(arr,num) {

    if(arr.length == 0) return 0;

    if(arr[arr.length-1] == num) return 1 + countOccurrences(arr.slice(0,-1),num);

    else return countOccurrences(arr.slice(0,-1),num);
    
}

const numbers = [2, 3, 4, 2, 5, 2, 6, 2];
console.log(countOccurrences(numbers, 2))