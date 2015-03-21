#!/bin/bash

tarbell generate _out
cp -R _out/* ~/src/asylum/
cd ~/src/asylum
git stash
git checkout gh-pages
git add -A .
git commit -m "updated for publication"
git push origin gh-pages