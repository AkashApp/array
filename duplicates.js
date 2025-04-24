// Remove duplicates from the array
// Given an array Arr which is sorted in non-decreasing order of size N,
// the task is to remove all the duplicates from the array.
// It is given that all array elements are distinct.

// Input: N = 5, Arr = [1, 2, 2, 3, 4]
// Output: 4

// Input: N = 6, Arr = [1, 2, 2, 3, 4, 4]
// Output: 4

const removeDuplicates = (nums)=> {
    for(let i=0; i<nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            nums.splice(i+1, 1);
        }
    }

    return nums.length;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]))

const removeDuplicates2 = (nums)=> {
    if(nums.length ===0) return 0;
    let i=0;

    for(let j=1; j<nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }

    return i+1;
}
console.log(removeDuplicates2([1, 2, 2, 3, 4, 4]))