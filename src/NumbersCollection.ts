import { BubbleSorter } from "./BubbleSorter"

export class NumbersCollection extends BubbleSorter {
    constructor(public data: number[]){
        super();
    }
    compare(left: number, right: number): boolean {
        return this.data[left] > this.data[right]
    }
    swap(left: number, right: number): void{
        let newNum = this.data[right]
        this.data[right] = this.data[left] 
        this.data[left] = newNum
    }
    get length(): number {
        return this.data.length
    }
}