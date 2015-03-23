#!/bin/bash
cd img
for file in *.jpg; do
    if [[ $file != desktop* ]];
    then
        echo "Making desktop-$file"
        convert $file -strip -interlace Plane -gaussian-blur 0.03 -quality 80 -resize 1140 desktop-$file
    fi
done


