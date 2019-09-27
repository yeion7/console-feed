
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./console-feed.cjs.production.min.js')
} else {
  module.exports = require('./console-feed.cjs.development.js')
}
