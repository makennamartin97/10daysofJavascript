//Complete the getSecondLargest function in the editor below. It has one 
//parameter: an array, nums,of n numbers. The function must find and return 
//the second largest number in nums.

function getSecondLargest(nums) {
    // Complete the function
    let max = nums[0];
    let max2 = nums[0];
    for(var i = 0; i <= nums.length; i++){
        if(nums[i] > max){
            max = nums[i];
        }
    }
    for(var j = 0; j<= nums.length; j++){
        if(nums[j] < max && nums[j] > max2){
            max2 = nums[j]
        }
    }
    return max2;
}