#!/bin/bash
DIR=$(basename $(pwd))
BASE=${BASE:=/${DIR}/build/default/}
polymer build --bundle --js-minify --js-compile --css-minify --html-minify &&
  echo "Setting '<base href>' to ${BASE}" &&
  sed -i -e "s#<script>'<base href=\"[^\"]*\">';</script>#<base href=\"${BASE}\">#" build/default/index.html || {
  echo "Failed!"
  exit -1
}
