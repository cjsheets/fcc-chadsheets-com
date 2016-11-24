/**
 * Express configuration
 */

'use strict';

import config from './environment';
import express from 'express';
import favicon from 'serve-favicon';
// import lusca from 'lusca';
// import session from 'express-session';
// import connectMongo from 'connect-mongo';
import mongoose from 'mongoose';
import path from 'path';
const debug = require('debug')('config:express');

// const MongoStore = connectMongo(session);

export default function(app) {
  var env = app.get('env');

  if(env === 'development' || env === 'test') {
    app.use(express.static(config.root('.tmp')));
    app.set('appPath', config.root('client'));
  }

  if(env === 'production') {
    app.use(favicon(config.root('client/assets/favicon.ico')));
    app.set('appPath', config.root('dist'));
  }

  app.use(express.static(app.get('appPath')));


  app.set('views', config.root('/server/views'));


  // // Persist sessions - Lusca depends on sessions
  // app.use(session({
  //   secret: config.secrets.session,
  //   saveUninitialized: true,
  //   resave: false,
  //   store: new MongoStore({
  //     mongooseConnection: mongoose.connection,
  //     db: 'fcc_image-search-abstraction-layer'
  //   })
  // }));

  // /**
  //  * Lusca - express server security
  //  * https://github.com/krakenjs/lusca
  //  */
  // if(env !== 'test' && !process.env.SAUCE_USERNAME) {
  //   app.use(lusca({
  //     csrf: {
  //       angular: true
  //     },
  //     xframe: 'SAMEORIGIN',
  //     hsts: {
  //       maxAge: 31536000, //1 year, in seconds
  //       includeSubDomains: true,
  //       preload: true
  //     },
  //     xssProtection: true
  //   }));
  // }
}
