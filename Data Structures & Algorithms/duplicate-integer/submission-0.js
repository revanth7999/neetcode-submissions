class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let res = new Map();

        for(let n of nums){
            res.set(n, (res.get(n)||0)+1)
        }
        console.log(res);

        for (const value of res.values()) {
            if(value >1){
                return true;
            }
        }
        return false;

    }
}
