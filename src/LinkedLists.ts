import { BubbleSorter } from "./BubbleSorter";

class Node {
    next: Node | null = null;
    constructor(public value: number){}
}
export class LinkedLists extends BubbleSorter {
    constructor(){
        super();
    }
    head: Node | null = null;
    get length(): number {
        if(!this.head){
            return 0;
        } else {
            let length = 1;
            let node = this.head;
            while(node.next){
                length++;
                node = node.next
            }
            return length
        }
    }
    add(i: number): void {
        const node = new Node(i)
        if (!this.head){
            this.head = node;
        } else {
            let tail = this.head;
            while(tail.next){
                tail = tail.next
            }
            tail.next = node
        }
    }
    at(index: number): Node {
        if(!this.head){
            throw new Error("Index out of bounds")
        }
        let counter = 0;
        let node: Node | null = this.head;
        while(node){
            if(counter === index){
                return node;
            }
            counter++;
            node = node.next
        }
        throw new Error("Index out of bounds")
    }
    compare(left: number, right: number): boolean {
        if(!this.head){
            throw new Error('list is empty')
        }
        return this.at(left).value > this.at(right).value
    }
    swap(left: number, right: number): void{
        let leftNode = this.at(left)
        let rightNode = this.at(right)
        let leftHand = leftNode.value
        leftNode.value = rightNode.value
        rightNode.value = leftHand
    }
    print(): void{
        if(!this.head){
            return;
        }
        let node: Node | null = this.head;
        while(node){
            console.log(node.value);
            node = node.next
        }
    }
}
