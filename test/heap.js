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

  describe('#save()', function(){

    it('should add items', function(){

      this.h.save(1)
      expect(this.h.getLength()).to.equal(1)

      this.h.save(10)
      expect(this.h.getLength()).to.equal(2)

      this.h.save(5)
      expect(this.h.getLength()).to.equal(3)

    })

  })

  describe('#extract()', function(){

    it('should extract minimum each time', function(){
      this.h.save(1)
      this.h.save(10)
      this.h.save(5)
      this.h.save(6)
      this.h.save(-5)
      this.h.save(0)
      this.h.save(94)
      expect(this.h.getLength()).to.equal(7)

      expect(this.h.extract()).to.equal(-5)
      expect(this.h.getLength()).to.equal(6)

      expect(this.h.extract()).to.equal(0)
      expect(this.h.getLength()).to.equal(5)

      expect(this.h.extract()).to.equal(1)
      expect(this.h.getLength()).to.equal(4)

      expect(this.h.extract()).to.equal(5)
      expect(this.h.getLength()).to.equal(3)

      expect(this.h.extract()).to.equal(6)
      expect(this.h.getLength()).to.equal(2)

      expect(this.h.extract()).to.equal(10)
      expect(this.h.getLength()).to.equal(1)

      expect(this.h.extract()).to.equal(94)
      expect(this.h.getLength()).to.equal(0)

      expect(this.h.extract()).to.equal(undefined)

    })

  })

})
