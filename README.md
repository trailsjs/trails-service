# trails-service

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Follow @trailsjs on Twitter][twitter-image]][twitter-url]

Trails Service Class. Exposes Trails Application resources to the class
instances. Services should extend this Class. This module is installed
by default in new Trails applications.

## Usage

```js
const Service = require('trails-service')

class MyService extends Service {
  serviceMethod () {
    this.log.info('hello')
    // ...
  }
}
```

## Patterns

#### Important Note
The specification below is not yet implemented in Trails 1.0. Implementation is tentatively scheduled for 2.x series release.

#### Overview

In Trails, Controller methods should remain lightweight. Their primary function is to extract the necessary data from the request, and pass the data into a Service method to perform any necessary work. Controller methods also handle any errors received from the Services, and translate them for the client response.

The work performed by the Services can vary, and depending on the kinds of tasks performed by the Service methods,
the following patterns can be used to optimize and scale your application.

### Traditional Single-Process

#### Description

By default, Services are instantiated in the same process as the Trails Application. Controllers
invoke Service methods directly. The **Service Interface** directly passes through method
calls and arguments to the **Service Layer**. The scalability of the **Service Layer** and the **Application Layer**
are coupled together, one-to-one.

For example, [Sails Services](http://sailsjs.org/documentation/concepts/services) use this Traditional Single-Process
pattern.

#### Diagram
<img src="http://trailsjs.io/images/trails-service-traditional.png">

#### Applicability
This pattern is applicable for web applications under low/normal load, where the service methods mainly
are performing async I/O, such as performing database queries. Should not be used for memory-bound 
tasks or CPU-intensive tasks such as video encoding, PDF generation, etc.

### Multi-Process

#### Description
Within a single machine or server, multiple Service processes are spawned from the main Application.
The **Service Interface** invokes the Service methods via IPC (Inter-process Communication). The **Service Layer**
returns the response also via IPC, and the **Service Interface** resolves the caller's `Promise`. 

#### Diagram
<img src="http://trailsjs.io/images/trails-service-child-process.png">

#### Applicability
Use this pattern to offload CPU-bound work from the main process. Useful for Services that perform short-lived but CPU-intensive tasks such as cryptographically-strong random number generation, or data transformations on small/medium-sized datasets. Should not be used for memory-bound tasks.


### Multi-Node Worker Queue

#### Description

#### Diagram
<img src="http://trailsjs.io/images/trails-service-workers.png">

#### Applicability



## License
[MIT](https://github.com/trailsjs/trails/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/trails.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trails
[ci-image]: https://img.shields.io/travis/trailsjs/trails-service/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/trailsjs/trails-service
[daviddm-image]: http://img.shields.io/david/trailsjs/trails-service.svg?style=flat-square
[daviddm-url]: https://david-dm.org/trailsjs/trails-service
[codeclimate-image]: https://img.shields.io/codeclimate/github/trailsjs/trails-service.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/trailsjs/trails-service
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails-service
[twitter-image]: https://img.shields.io/twitter/follow/trailsjs.svg?style=social
[twitter-url]: https://twitter.com/trailsjs

