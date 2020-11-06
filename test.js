const nums = [1,2,3,4,5,6];


const getEven = (nums) => {
    let result = [];
    for(let i in nums){
        if(nums[i]%2==0){
            result.push(nums[i]);
        }
    } return result;
}