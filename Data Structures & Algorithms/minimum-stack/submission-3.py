class MinStack:

    def __init__(self):
        self.stack = []
        self.support_stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.support_stack:
            self.support_stack.append(val)
        else:
            self.support_stack.append(min(val, self.support_stack[-1]))

    def pop(self) -> None:
        self.stack.pop()
        self.support_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.support_stack[-1]
