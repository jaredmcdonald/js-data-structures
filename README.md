# js-data-structures

## global dependencies

```bash
$ npm install -g grunt-cli
```

## setup

```bash
$ git clone https://github.com/jaredmcdonald/js-data-structures.git && npm install
```

## building / testing

```bash
$ grunt
```

outputs `traceur`-compiled ES5 as `dist/<script-name>.js` and then runs all tests matching `test/*.js`

## usage

### `Hash`

```javascript
var Hash = require('./dist/hash.js')
var h = new Hash()

h.save('key', 'value')
h.retrieve('key')    // 'value'
h.delete('key') // 'value'

h.get('key')    // undefined
h.delete('key') // undefined

h.save('key2', 'value')
h.save('key2', 'value2') // ReferenceError
```


### `Heap`

```javascript
var Heap = require('./dist/heap.js')
var h = new Heap()

h.save(2)
h.save(5)
h.save(0)

h.extract() // 0
```
pass a custom comparator as the sole argument to the constructor, e.g.,

```javascript
// extract-max heap
var h2 = new Heap(function(a, b){
  return a >= b  
})

h2.save(2)
h2.save(5)
h2.save(0)

h2.extract() // 5
```
