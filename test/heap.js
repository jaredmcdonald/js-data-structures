var assert = require('assert')
,   expect = require('chai').expect
,   Heap = require('../dist/heap.js')

describe('Heap', function(){

  beforeEach(function(){
    this.h = new Heap()
  })

  afterEach(function(){
    delete this.h
  })

  describe('#add()', function(){

    it('should add items', function(){

      this.h.add(1)
      expect(this.h.getLength()).to.equal(1)

      this.h.add(10)
      expect(this.h.getLength()).to.equal(2)

      this.h.add(5)
      expect(this.h.getLength()).to.equal(3)

    })

  })

  describe('#get()', function(){

    it('should extract minimum each time', function(){
      this.h.add(1)
      this.h.add(10)
      this.h.add(5)
      this.h.add(6)
      this.h.add(-5)
      this.h.add(0)
      this.h.add(94)
      expect(this.h.getLength()).to.equal(7)

      expect(this.h.get()).to.equal(-5)
      expect(this.h.getLength()).to.equal(6)

      expect(this.h.get()).to.equal(0)
      expect(this.h.getLength()).to.equal(5)

      expect(this.h.get()).to.equal(1)
      expect(this.h.getLength()).to.equal(4)

      expect(this.h.get()).to.equal(5)
      expect(this.h.getLength()).to.equal(3)

      expect(this.h.get()).to.equal(6)
      expect(this.h.getLength()).to.equal(2)

      expect(this.h.get()).to.equal(10)
      expect(this.h.getLength()).to.equal(1)

      expect(this.h.get()).to.equal(94)
      expect(this.h.getLength()).to.equal(0)

      expect(this.h.get()).to.equal(undefined)

    })

  })

})
