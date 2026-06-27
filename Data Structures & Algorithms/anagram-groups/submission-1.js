class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const aCode = 'a'.charCodeAt(0);

        for (const str of strs) {
            const count = new Array(26).fill(0);

            for (const char of str) {
                const index = char.charCodeAt(0) - aCode;
                count[index]++;
            }

            const key = count.join(',');

            if (!map.has(key)) map.set(key, []);

            map.get(key).push(str);
        }

        return Array.from(map.values());
    }
}
