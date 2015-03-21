#!/bin/bash

rm -Rf _out
tarbell generate _out
cp -R _out/* ~/src/asylum/
cd ~/src/asylum
git add -A
git commit -m "updated for publication"
git push origin gh-pages