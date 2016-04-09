'use strict'

const assert = require('assert')
const Service = require('../')

describe('Trails Service', () => {
  class FooService extends Service {
    testMethod () {
    }
  }

  describe('#constructor', () => {
    it('.app should be accessible but not enumerable', () => {
      const foo = new FooService(1)
      const keys = Object.keys(foo)

      assert.equal(foo.app, 1)
      assert.equal(keys.indexOf('app'), -1)
    })
  })
})

