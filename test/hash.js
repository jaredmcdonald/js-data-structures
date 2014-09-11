var assert = require('assert')
,   sinon = require('sinon')
,   expect = require('chai').expect
,   Hash = require('../dist/hash')

describe('Hash', function(){

  beforeEach(function(){
    this.h = new Hash()
  })

  afterEach(function(){
    delete this.h
  })

  describe('#save()', function(){

    it('doesn\'t throw when saving arbitrary data', function(){
      var spy = sinon.spy(this.h, 'save')

      this.h.save('someKey', 'someData')

      this.h.save('anotherKey', { foo : 'bar' })

      this.h.save('keyThree', [ 'foo' , 'bar' ])

      this.h.save('keyFour', 1234567890)

      this.h.save('yetAnother', new Date())

      expect(spy.threw()).to.equal(false)
      spy.restore()

    })

    it('throws for a duplicate key', function(){
      var spy = sinon.spy(this.h, 'save')

      this.h.save('someKey', 'someData')
      expect(spy.threw()).to.equal(false)

      expect(this.h.save.bind(this.h, 'someKey', 'moreData')).to.throw()

      spy.restore()
    })

  })



  describe('#retrieve()', function(){
    it('should retrieve saved items', function(){
      this.h.save('someKey', 'someData')
      this.h.save('anotherKey', { foo : 'bar' })
      this.h.save('keyThree', [ 'foo' , 'bar' ])
      this.h.save('keyFour', 1234567890)
      this.h.save('yetAnother', new Date())

      expect(this.h.retrieve('someKey')).to.equal('someData')
      expect(this.h.retrieve('someKey')).to.equal('someData') // retrieve multiple times
      expect(this.h.retrieve('anotherKey')).to.deep.equal({ foo : 'bar' })
      expect(this.h.retrieve('keyThree')).to.deep.equal([ 'foo' , 'bar' ])
      expect(this.h.retrieve('keyFour')).to.deep.equal(1234567890)
      expect(this.h.retrieve('yetAnother').constructor).to.deep.equal(Date)

    })

    it('should return `undefined` rather throw when key doesn\'t exist', function(){
      expect(this.h.retrieve.bind(this.h, 'asdfhjk')).to.not.throw()
      expect(this.h.retrieve('jfsdhfd')).to.equal(undefined)
    })


  })

  describe('#delete()', function(){
    it('should delete the item at the specified key', function(){
      this.h.save('someKey', 'someData')
      expect(this.h.delete.bind(this.h, 'someKey')).to.not.throw()
      expect(this.h.retrieve('someKey')).to.equal(undefined)
    })

    it('should return the item being deleted', function(){
      this.h.save('someKey', 'someData')
      expect(this.h.delete('someKey')).to.equal('someData')
    })

    it('should return `undefined` rather than throwing when key isn\'t found', function(){
      expect(this.h.delete.bind(this.h, 'asdfhjk')).to.not.throw()
      expect(this.h.delete('jfsdhfd')).to.equal(undefined)
    })
  })

})
