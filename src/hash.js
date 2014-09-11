module.exports = class Hash {

  constructor(size = 500){
    this.size = size
    this._init(this.size)
  }

  _init(size){
    this.buckets = Array.apply(null, Array(size)).map(function(){
      return []
    })
  }

  _getStoreVal(str) {
    return this.size % this._strToInt(str)
  }

  _strToInt(str){
    var int = 0
    for (var i = 0; i < str.length; str++) {
      int += str.charCodeAt(i)
    }
    return int
  }

  _lookup(key) {
    return this.buckets[this._getStoreVal(key)].find(function(item){
      return item.key === key
    })
  }

  _lookupIndexInBucket(key) {
    return this.buckets[this._getStoreVal(key)].findIndex(function(item){
      return item.key === key
    })
  }

  // right now we only suport string keys,
  // making this not the most useful thing ever
  save(key, data){
    if (this._lookupIndexInBucket(key) !== -1) {

      throw new ReferenceError('key \'' + key + '\' already exists')

    } else {
      this.buckets[this._getStoreVal(key)].push({ key , data })
    }

  }

  retrieve(key){
    try {
      return this._lookup(key).data
    } catch (error) {
      return undefined
    }
  }

  delete(key){
    try {
      var whichBucket = this._getStoreVal(key)
      ,   bucketIndex = this._lookupIndexInBucket(key)

      return this.buckets[whichBucket].splice(bucketIndex, 1)[0].data

    } catch (error) {
      return undefined
    }
  }
}
