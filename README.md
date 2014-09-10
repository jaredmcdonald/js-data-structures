# js-data-structures

## global dependencies

```bash
$ npm install -g grunt-cli
```

## setup

get the repo and install dependencies

```bash
$ git clone https://github.com/jaredmcdonald/js-data-structures.git
$ npm install
```

## building

```bash
$ grunt
```

outputs `traceur`-compiled ES5 as `dist/<script-name>.js`

## usage

```javascript
var Heap = require('./dist/heap.js')
var h = new Heap()

h.add(2)
h.add(5)
h.add(0)

h.get() // 0
```
pass a custom comparator as the sole argument to the constructor, e.g.,

```javascript
// extract-max heap
var h2 = new Heap(function(a, b){
  return a >= b  
})
```
