#!/bin/bash
bower install
polymer build --entrypoint index.html
mv build build-tmp
polymer build --entrypoint single-board.html
rsync -avprl build-tmp/default/ build/default/
rm -rf build-tmp

