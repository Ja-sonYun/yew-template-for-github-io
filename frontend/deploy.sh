#!/bin/zsh

cd ./style
[ -d "/node_modules" ] && echo "Installing node modules..." && npm install
[ -f "/dist/main.css" ] && echo "Building style..." && npm run build
cd ..

if ! type "trunk" > /dev/null; then
    echo "trunk not installed."
    echo "check https://trunkrs.dev"
else
    trunk build --release --public-url /public -d ../public
    echo "------------------------------"
    echo "mv -f ../public/index.html ../" && mv -f ../public/index.html ../
fi
