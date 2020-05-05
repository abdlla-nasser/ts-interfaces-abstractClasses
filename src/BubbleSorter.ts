export abstract class BubbleSorter {
    abstract compare(i: number, j:number):boolean
    abstract swap(i: number, j:number):void
    abstract length: number
    sort():void{
        let { length } = this
        for(let i = 0; i < length; i++){
            for(let j = i + 1; j < length; j++){
                if(this.compare(i,j)){
                    this.swap(i,j)
                }
            }
        }
    }
}