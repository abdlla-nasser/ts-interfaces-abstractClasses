import { NumbersCollection } from './NumbersCollection'
import { Strings } from './Strings';
import { LinkedLists } from './LinkedLists'
let arr = [2,16,0,-10,-1]
const linkedlist = new LinkedLists()
const numbers = new NumbersCollection(arr)
const chars = new Strings("zxYw")
numbers.sort()
chars.sort()
console.log(chars.data)
console.log(numbers.data)
arr.forEach(elem => linkedlist.add(elem))
linkedlist.sort()
linkedlist.print()
