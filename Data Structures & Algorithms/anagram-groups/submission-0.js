class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let i = 0; i < strs.length; i++) {
            const characters = new Array(26).fill(0);

            for (let j = 0; j < strs[i].length; j++)
                characters[strs[i].charCodeAt(j) - 97]++;
            

            const key = characters.join('|');

            if (!map.has(key)) map.set(key, []);
            map.get(key).push(strs[i]);
        }

        return Array.from(map.values());
    }
}
