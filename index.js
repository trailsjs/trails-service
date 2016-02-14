'use strict'

/**
 * Trails Service Class.
 */
module.exports = class TrailsService {
  constructor (app) {
    Object.defineProperty(this, 'app', {
      enumerable: false,
      value: app
    })
  }

  get log () {
    return this.app.log
  }

  get __ () {
    return this.app.packs.core.i18n.t
  }
}
