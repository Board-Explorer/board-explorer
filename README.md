# Board Explorer

Copyright (C) 2016-2017 Intel Corporation

# License

| License    | Components                                           |
|:-----------|:-----------------------------------------------------|
| Apache 2.0 | Express app and front-end application and components |
| CC-BY-3.0  | boards/* including documentation and graphics        |

## Overview

The Board Explorer is:

1. An interactive visualization and documentation explorer
2. A JSON syntax for describing hardware boards
3. A convention used when naming elements in an SVG to allow the JSON data to
   be visualized to the user with the board explorer

The Board Explorer application is written using [Polymer](https://polymer-project.org).

The project uses the `board-viewer` element, which is responsible for parsing
an SVG, JSON data file, and translating associated documentation for
presentation. Stand alone applications can use the `board-viewer` element
independent of the Board Explorer application.


## Adding a new board




### Prerequisites

```bash
sudo apt-get install nodejs nodejs-legacy npm
sudo npm install -g bower
```

## Installation

To install the board-viewer, assuming your server's doc-root is set to `/var/www`

```bash
export DOCROOT=/var/www
```

```bash
cd ${DOCROOT}
git clone https://github.com/board-explorer/board-explorer.git
```

You then need to install the web components used by the project and node
dependencies:

```bash
cd ${DOCROOT}/board-viewer
bower install
npm install
```

## Running

```bash
cd ${DOCROOT}/board-viewer
node app.js
```

The NodeJS application can be placed behind an nginx proxy if you want. By
default the application will listen on port 11211.