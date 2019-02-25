/**
 * 栈
 */
export default class Stack<T> {
    private count: number

    private items: any

    constructor() {
        this.count = 0
        this.items = {}
    }

    public push(item: T) {
        this.items[this.count] = item
        this.count++
    }

    public pop() {
        if(this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result

    }

    public peek() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }

    public size() {
        return this.count
    }

    public clear() {
        this.count = 0
        this.items = {}
    }

    public isEmpty(): boolean {
        return this.count == 0
    }

    public toString() {
        if(this.isEmpty()) {
            return ''
        }
        let result = this.items[0]
        for(let i = 1; i < this.count; i ++) {
            result += `,${this.items[i]}`
        }
        return result
    }
}

