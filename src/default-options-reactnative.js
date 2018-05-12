'use strict'

const memoryDs = require("interface-datastore/src/memory");

// Default configuration for a repo in React Native
module.exports = {
  lock: 'memory',
  storageBackends: {
    root: memoryDs,
    blocks: memoryDs,
    keys: memoryDs,
    datastore: memoryDs
  },
  storageBackendOptions: {
    root: {
    },
    blocks: {
    },
    keys: {
    },
    datastore: {
    }
  }
}
