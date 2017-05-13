# Self hosting the Board Explorer

The Board Explorer project is hosted on GitHub, and uses the GitHub workflow
for managing the project.

The following assumes you are working on an Ubuntu system. You can develop
on other platforms, using whatever package management that system provides.


## Prerequisites

Installing the Board Explorer requires bower:

```bash
sudo apt-get install nodejs nodejs-legacy npm
sudo npm install -g bower
```

# Installation

The Board Explorer can either by statically hosted out of an existing web
server, or it can provide its own HTTP service (using Express)

To install the board-explorer, assuming your server's doc-root is set to
`/var/www`:

```bash
export DOCROOT=/var/www
cd ${DOCROOT}
git clone https://github.com/board-explorer/board-explorer.git
```

## Installation: Existing web server

In addition to the base project, you need to install the bower dependencies:

```bash
bower install
```

## Installation: providing HTTP service

Installing as an HTTP service requires bower and nodejs.

You then need to install the web components used by the project and node
dependencies:

```bash
cd ${DOCROOT}/board-explorer
bower install
npm install
```

## Running

```bash
cd ${DOCROOT}/board-explorer
node app.js
```

The NodeJS application can be placed behind an nginx proxy if you want. By
default the application will listen on port 11211.
