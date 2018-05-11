'use strict'

// Default configuration for a repo in the browser
module.exports = {
  lock: 'memory',
  storageBackends: {
    root: require('datastore-level'),
    blocks: require('datastore-level'),
    keys: require('datastore-level'),
    datastore: require('datastore-level')
  },
  storageBackendOptions: {
    root: {
      db: require('asyncstorage-down'),
      extension: ''
    },
    blocks: {
      sharding: false,
      db: require('asyncstorage-down')
    },
    keys: {
      sharding: false,
      db: require('asyncstorage-down')
    },
    datastore: {
      db: require('asyncstorage-down')
    }
  }
}
