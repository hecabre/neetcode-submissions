class MinStack {
    stack: number[];
    auxiliarStack: number[];
    constructor() {
        this.stack = [];
        this.auxiliarStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(Number(val));

        if (this.auxiliarStack.length === 0) {
            this.auxiliarStack.push(Number(val));
        } else {
            const min = Math.min(val, this.auxiliarStack.at(-1));
            this.auxiliarStack.push(Number(min));
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.auxiliarStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return Number(this.auxiliarStack.at(-1));
    }
}
