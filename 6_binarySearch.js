function binarySearch(arr,num) {

    let middEl = Math.floor(arr.length/2);

    if(num === arr[middEl]) return middEl;

    if(arr.length === 0 || arr.length === 1) return -1;

    if(num < arr[middEl]) return binarySearch(arr.slice(0,middEl),num);

    if(num > arr[middEl]) return binarySearch(arr.slice(middEl),num);
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearch(sortedArray, 5)); 
console.log(binarySearch(sortedArray, 10));