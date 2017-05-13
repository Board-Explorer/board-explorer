/**
 * * Copyright (c) 2016, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 */

"use strict";

/**
 * Module sets up the express routing, and associated middleware (cookie and body parser, logger, etc.)
 * @type {"express".e}
 */

const express = require('express');
const path = require('path');
const fs = require('fs');
const logger = require('morgan');
const bodyParser = require('body-parser');
const url = require('url');

const index = require('./routes/index');

const app = express();
/* Set basePath to the directory name wrapped in slashes */
let basePath = process.env.BASE || '/';
let port = parseInt(process.env.PORT) || 11211;

if (process.argv.length > 2) {
  basePath = process.argv[2];
}
if (process.argv.length > 3) {
  port = parseInt(process.argv[3]);
}

console.log("Serving files to docroot: '" + basePath + "'");
console.log("Serving files from filepath: '" + __dirname + "'");

/* App is behind an nginx proxy which we trust, so use the remote address
 * set in the headers */
app.set('trust proxy', true);

app.use(logger('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Return 401's for the following path-regexps */
[ '.git/?*', 'update.log' ].forEach(function(pattern) {
  app.get(basePath + pattern, function(req, res, next) {
    res.status(401).send("Unauthorized.");
  });
});

app.use(basePath + 'bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use(basePath, index);
app.use(basePath, express.static(path.join(__dirname, '.'), {
  redirect: true,
  index: false
}));

/* To handle dynamic routes, we return index.html to every 404.
 * However, that introduces site development problems when assets are
 * referenced which don't yet exist (due to bugs, or sequence of adds) --
 * the server would return HTML content instead of the 404.
 *
 * So, check to see if the requested path is for an asset with a recognized
 * file extension.
 *
 * If so, 404 because the asset isn't there. otherwise assume it is a
 * dynamic client side route and *then* return index.html. */
app.use(function(req, res, next) {
  /* List of filename extensions we know are "potential" file extensions for
   * assets we don't want to return "index.html" for */
  const extensions = [
    "html", "js", "css", "eot", "gif", "ico", "jpeg", "jpg", "mp4", "md", "ttf",
    "txt", "woff", "woff2", "yml", "svg" ];

  /* Build the extension match RegExp from the list of extensions */
  const extensionMatch = new RegExp("^.*?(" + extensions.join('|') + ")$", "i");

  const parts = url.parse(req.url);
  if (!extensionMatch.exec(parts.pathname)) {
    /* Replace {{base}} in index.html with the basePath
     * We don't really use handlebars, but the syntax is nice for this specific
     * usage */
    const index = fs.readFileSync('./index.html', 'utf8').replace(/\{\{base\}\}/, basePath);

    res.send(index);
    return;
  }

  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

const http = require('http');

/**
 * Create HTTP server and listen for new connections
 */
app.set('port', port);

const server = http.createServer(app);

server.listen(port);

server.on('error', function(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(port + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(port + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on('listening', function() {
  console.log("Listening on " + port);
});
