class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const alphabet = new Array(26).fill(0)
        for(let i = 0; i < s.length; i++) {
            alphabet[s[i].charCodeAt(0) - 97] += 1
        }
        for(let i = 0; i < t.length; i++) {
            alphabet[t[i].charCodeAt(0) - 97] -= 1
        }
        for(let i = 0; i < alphabet.length; i++) {
            if(alphabet[i] !== 0) {
                return false
            }
        }
        return true
    }
}
