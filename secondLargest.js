// Second largest number 
// Given an arry Arr of size N, print the second largest element from an array.
// It is given that all array elements are distinct.

// Input: [12, 35, 1, 10, 34, 1]
// Output: 34

// Input: [10,5,10]
// Output: 5

const secondLargest = (arr) => {
    let uniqueArr = Array.from(new Set(arr)); //[...new Set(arr)]
    uniqueArr.sort((a, b) => b - a);
    if(uniqueArr.length >= 2) return uniqueArr[1];
    return -1;
}
console.log(secondLargest([12, 35, 1, 10, 34, 1, 35, 34, 32]));


// optized
const secondLargest2 = (arr) =>{
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] != largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(secondLargest2([12, 35, 1, 10, 34, 1, 35, 34, 32]))