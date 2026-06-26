class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc, curr) => (acc + `${curr.length}#${curr}`), '');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            const j = str.indexOf('#', i);
    
            const length = Number(str.slice(i, j));
            const start = j + 1;
            const end = start + length;
            const word = str.slice(start, end);

            result.push(word);
            i = end;
        }

        return result;
    }
}
