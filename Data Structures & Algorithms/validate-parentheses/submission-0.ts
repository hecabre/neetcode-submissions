class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const parentheses = new Map<string, string>([
            ["(",")"],
            ["{","}"],
            ["[","]"]
        ])
        const stack = []
        for(let i = 0; i < s.length; i++) {
            if(parentheses.has(s[i])) {
                stack.push(s[i])
            } else {
                if(parentheses.get(stack.at(-1)) !== s[i]) {
                    return false
                } else {
                    stack.pop()
                }
            }
        }
        return stack.length === 0 ? true : false
    }
}
