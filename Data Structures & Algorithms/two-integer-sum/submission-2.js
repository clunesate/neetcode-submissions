class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const j = target - nums[i];

            if (map.has(j)) return [i, map.get(j)];

            map.set(nums[i], i);
        }

        return [];
    }
}
