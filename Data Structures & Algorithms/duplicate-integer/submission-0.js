class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set([nums[0]]);

        for (let i = 1; i < nums.length; i++) {
            if (set.has(nums[i])) return true;
            else set.add(nums[i]);
        }

        return false;
    }
}
