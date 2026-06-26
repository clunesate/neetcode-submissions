class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const parts = [];
        
        for (const s of strs) parts.push(`${s.length}#${s}`);
            
        return parts.join('');
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
