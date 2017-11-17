#!/bin/bash
[ ! -d build/default ] && {
  echo "Run 'polymer build' first."
  exit -1
}

rsync -avprl .git/ build/default/.git/
cd build/default
git checkout origin/master --orphan gh-pages
git add -A .
git commit -am "seed gh-pages from build system"
git push -u origin gh-pages --force
cd ../..

