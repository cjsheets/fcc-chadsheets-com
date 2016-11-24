'use strict';
/*eslint no-process-env:0*/

// Production specific configuration
// =================================
var all = {
  // Server IP
  ip: process.env.OPENSHIFT_NODEJS_IP
    || process.env.ip
    || undefined,

  // Server port
  port: process.env.OPENSHIFT_NODEJS_PORT
    || process.env.PORT
    || 8080,

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB_URI
      || process.env.MONGOHQ_URL
      || process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME
      || 'mongodb://' + process.env.MLAB_USER + ':' + process.env.MLAB_PASS + 
        '@ds145997.mlab.com:45997/cjs-sandbox'
      || 'mongodb://localhost/test'
  }
};

module.exports = all;