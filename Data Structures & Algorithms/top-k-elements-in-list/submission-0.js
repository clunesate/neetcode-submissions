class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (const num of nums) map.set(num, (map.get(num) || 0) + 1);

        const bucket = Array(nums.length + 1)
            .fill(null)
            .map(() => []);

        for (const [num, freq] of map.entries())
            bucket[freq].push(num);

        const result = [];

        for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
            for (const num of bucket[i]) {
                result.push(num);
                if (result.length === k) break;
            }
        }

        return result;
    }
}