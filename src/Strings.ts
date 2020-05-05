import { BubbleSorter } from "./BubbleSorter"

export class Strings extends BubbleSorter {
    constructor(public data: string){
        super();
    }
    get length(): number {
        return this.data.length
    }
    compare(left: number, right: number): boolean {
        return this.data[left].toLowerCase() > this.data[right].toLowerCase()
    }
    swap(left: number, right: number): void{
        let chars = this.data.split('')
        let newChar = chars[right]
        chars[right] = chars[left] 
        chars[left] = newChar
        this.data = chars.join('')
    }
}