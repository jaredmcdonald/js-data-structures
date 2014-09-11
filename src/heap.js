module.exports = class Heap {

  // default comparator: `<=`
  constructor(comparator = (a, b) => a <= b ) {
    this._h = []
    this.compare = comparator
  }


  // add an item to the heap
  save(obj) {

    // initial index value is array length - 1, or
    // the last spot in the array
    var index = this._h.push(obj) - 1
    if (index === 0) return

    var parentIndex = this.getParentIndex(index)

    while (!this.compare(this._h[parentIndex], this._h[index])) {

      this.swap(parentIndex, index)

      index = parentIndex
      if (index === 0) break

      parentIndex = this.getParentIndex(index)

    }

  }

  // gets first item in heap and removes it
  extract() {
    var length = this._h.length

    if (length === 0) {
      return undefined
    }

    this.swap(0, length - 1)

    var item = this._h.pop()
    ,   index = 0
    ,   childIndexes = this.getChildIndexes(index)
    ,   currentItem = this._h[index]

    while (childIndexes[0] in this._h && childIndexes[1] in this._h &&
           !(this.compare(currentItem, this._h[childIndexes[0]]) &&
           this.compare(currentItem, this._h[childIndexes[1]]))) {

      var smallerChildIndex = this.compare(this._h[childIndexes[0]], this._h[childIndexes[1]]) ?
        childIndexes[0] : childIndexes[1]

      this.swap(index, smallerChildIndex)

      index = smallerChildIndex
      childIndexes = this.getChildIndexes(index)
      currentItem = this._h[index]

    }

    return item
  }

  getLength(){
    return this._h.length
  }

  getParentIndex(i) {
    return Math.floor(i / 2)
  }

  getChildIndexes(i) {
    var first = i * 2
    return [first, first + 1]
  }

  // swap items in heap array at indexes
  // i1 and i2 (must be valid integer indexes)
  swap(i1, i2) {
    var temp = this._h[i1]
    this._h[i1] = this._h[i2]
    this._h[i2] = temp
  }

}
