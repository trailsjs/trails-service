'use strict'

/**
 * Trails Service Class. 
 */
module.exports = class TrailsService {
  constructor (app) {
    this.app = app
    this.api = app.api
  }

  get log (){
    return this.app.log
  }

  get __ (){
    return this.app.__
  }
}
