function flattenArray(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {

            console.log(newArr);

            newArr.push(...flattenArray(arr[i]));
        }
        else newArr.push(arr[i]);
    }
    return newArr;   
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray));