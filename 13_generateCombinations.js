let result=[];

function generateCombinations(arr,num) {

    if(arr.length === 0) return "";

    for(let i = 0; i < arr.length; i++) {

        let elem = arr[i]
         
        let tempArr = arr.slice(i+1)

        for(let j = 0; j < tempArr.length; j++)

        result.push([elem,tempArr[j]])


    }

    return result;
    
}

const inputArray = [1, 2, 3, 4];
console.log(generateCombinations(inputArray, 2));