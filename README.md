# js-data-structures

## setup

    $ npm install

## building

    $ grunt

outputs `traceur`-compiled ES5 in `dist/<script-name>.js`

## usage

    var Heap = require('./dist/heap.js')
    var h = new Heap()

    h.add(2)
    h.add(5)
    h.add(0)

    h.get() // 0

pass a custom comparator as the sole argument to the constructor, e.g.,

    // extract-max heap
    var h2 = new Heap(function(a, b){
      return a >= b  
    })
