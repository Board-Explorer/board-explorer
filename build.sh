#!/bin/bash
[ "$1" = "-f" ] && {
  force=1
} || {
  force=0
}
git status -s -b -u no --porcelain | ( grep -q "^## master" || ((force)) ) || {
  cat << EOF
Current branch not master:

  $(git status -s -b -u no --porcelain)

Either checkout master, or specify -f to force build.

EOF
  exit
}

([ ! -d bower_components ] || rm -rf bower_components) &&
bower install &&
polymer build --entrypoint index.html &&
mv build build-tmp &&
polymer build --entrypoint single-board.html &&
rsync -aprl build-tmp/default/ build/default/ &&
rm -rf build-tmp && {
  cat << EOF

Build succeeded. ./publish.sh to push to GitHub.

EOF
} || {
  cat << EOF

Build failed.

EOF
}
