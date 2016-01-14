'use strict'

/**
 * Trails Service Class. 
 */
module.exports = class TrailsService {
  constructor (app) {
    this.app = app
  }

  get log () {
    return this.app.log
  }

  get __ () {
    return this.app.packs.core.i18n.t
  }
}
