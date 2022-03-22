#!/bin/zsh

trunk build --release --public-url /public -d ../public
echo "------------------------------"
echo "mv -f ../public/index.html ../" && mv -f ../public/index.html ../
