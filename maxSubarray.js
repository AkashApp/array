// Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6 ----> [4, -1, 2, 1]

// Input: [5, 4, -1, 7, 8]
// Output: 23 ----> [5, 4, -1, 7, 8]


// kadane's Algorithm
const maxSubarray = (nums) => {
    let sum = 0;
    let max = nums[0];

    for(let i=0; i<nums.length; i++){
        sum += nums[i];

        if(sum > max){
            max = sum
        }
        if(sum < 0){
            sum = 0;
        }
    }
    return max;
};
console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
