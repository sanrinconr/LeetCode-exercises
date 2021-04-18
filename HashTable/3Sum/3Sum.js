/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let out = []
    let hash = {}
    nums.sort((a,b)=>a-b)
    for(let  i = 0 ; i<nums.length ; i++){
        //If before if is the same dont make nothing, this is the reason of the sort()
        if (nums[i] === nums[i - 1]) {
            continue
        }
        hash = {}
        let temp = []
        for(let j = i+1 ;  j<nums.length ; j++){
            let twoValues = nums[i]+nums[j]
            if(hash[(0-twoValues).toString()] !== undefined){
                if(!temp.includes(nums[j])){
                    out.push([nums[i],nums[j], hash[(0-twoValues)]].sort((a,b)=>a-b))
                    temp.push(nums[j],hash[(0-twoValues)] )
                }
            }
            hash[nums[j].toString()] =  nums[j]
        }
    }
    return out
};

module.exports = threeSum

