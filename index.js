'use strict'

/**
 * Trails Service Class. 
 */
module.exports = class TrailsService {
  constructor (app) {
    this.app = app
    this.api = app.api
    this.log = this.app.log
    this.__ = this.app.__
  }
}
