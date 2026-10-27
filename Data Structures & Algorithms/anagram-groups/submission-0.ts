class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const response = new Map<string, string[]>();
        for (let str = 0; str < strs.length; str++) {
            const alphabet = new Array(26).fill(1);
            for (let i = 0; i < strs[str].length; i++) {
                alphabet[strs[str][i].charCodeAt(0) - 97] += 1;
            }
            const strike = alphabet.join(",");
            if (!response.has(strike)) {
                response.set(strike, []);
            }

            response.get(strike).push(strs[str]);
        }
        return Array.from(response.values());
    }
}
