class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = []
        const symbols = new Set(["-", "+", "/", "*"])
        for(let i = 0; i < tokens.length; i++) {
            if(!symbols.has(tokens[i])){
                stack.push(tokens[i])
            } else {
                const number1 = stack.at(-1)
                stack.pop()
                const number2 = stack.at(-1)
                stack.pop()
                if(tokens[i] === "+") {
                    stack.push(Number(number1) + Number(number2))
                } else if(tokens[i] === "-") {
                    stack.push(Number(number2) - Number(number1)) 
                } else if(tokens[i] === "*") {
                    stack.push(Number(number1) * Number(number2))
                } else {
                    stack.push(Math.trunc(Number(number2) / Number(number1)))
                }
            }
        }
        return stack.at(0)
    }
}
