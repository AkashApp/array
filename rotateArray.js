// Rotate Array by K times
// Given an array Arr of size N and an integer K.
// The task is to rotate the array elements to the right by K steps,
// where K is non-negative.

// Input: N = 5, Arr[] = {1, 2, 3, 4, 5}, K = 2
// Output: 4 5 1 2 3

// Input: N = 6, Arr[] = {1, 2, 3, 4, 5, 6}, K = 3
// Output: 3 4 5 6 1 2

const rotateArray = (arr, k) => {
    let size = arr.length;
    if(k > size) k = k % size;
    let rotated = arr.splice(size - k, k);
    arr.unshift(...rotated);
    return arr;
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));


// optimized
const rotateArray2 = (arr, k) => {
    let size = arr.length;
    if(k > size) k = k % size;

    reverse(arr, 0, size - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, size - 1);
    return arr;
}
const reverse = (arr, start, end) => {
    while(start < end) {
        let temp = arr[start];
        arr[start++] = arr[end];
        arr[end--] = temp;
    }
}
console.log(rotateArray2([1, 2, 3, 4, 5], 2));
