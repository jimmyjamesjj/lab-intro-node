class SortedList {
  constructor() {
 this.items=[]
 this.length=this.items.length
  }

  add(item) {
    this.items.push(item)
    if(this.length>1){
      this.items.sort((a, b) => a - b)
    }
this.length = this.items.length

  }

  get(pos) {
  if(pos>=this.length){
    throw new Error('OutOfBounds');
  
  }
  
   return this.items[pos]
  

  }

  max() {
    if(this.length===0){
      throw new Error('EmptySortedList');
    }
return this.items[this.length-1]

  }

  min() {
    if(this.length===0){
      throw new Error('EmptySortedList');
    }
return this.items[0]

  
  }

  sum() {
return this.items.reduce((sum, currentValue )=>{
  return sum+ currentValue
},0 )

  }

  avg() {
if (this.length===0){
  throw new Error('EmptySortedList');
}
return this.sum()/this.items.length

  }
}

module.exports = SortedList;
