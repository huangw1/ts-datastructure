import Stack from "../src/stack";

describe('栈', () => {
    let stack: Stack<number>
    beforeEach(() => {
        stack = new Stack<number>()
    })
    it('初始化为空', () => {
        expect(stack.size()).toBe(0)
        expect(stack.isEmpty()).toBeTruthy()
    })
    it('返回初始类型值', () => {
        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.toString()).toEqual('1,2,3')
    })
    it('进制转换', () => {
        function baseConverter(decNumber, base) {
            let rem
            let baseString = ''
            const digits = '0123456789ABCDEF'
            while (decNumber > 0) {
                rem = Math.floor(decNumber % base)
                stack.push(rem)
                decNumber = Math.floor(decNumber / base)
            }
            while (!stack.isEmpty()) {
                baseString += digits[stack.pop()]
            }
            return baseString
        }
        expect(baseConverter(10, 2)).toEqual('1010')
        expect(baseConverter(28, 16)).toEqual('1C')
    })
})
