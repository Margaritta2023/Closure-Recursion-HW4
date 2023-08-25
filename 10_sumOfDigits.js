function sumOfDigits(num) {

    if(num === 0) return 0;

    else return num%10 + sumOfDigits((num - num%10) / 10)

}

console.log(sumOfDigits(12345))