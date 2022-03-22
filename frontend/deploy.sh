#!/bin/zsh

cd ./style
if [ ! -d "/node_modules" ]; then
    echo "Installing node modules..."
    npm install
fi

if [ ! -f "/dist/main.css" ]; then
    echo "Building style..."
    npm run build
fi
cd ..

if ! type "trunk" > /dev/null; then
    echo "trunk not installed."
    echo "check https://trunkrs.dev"
else
    trunk build --release --public-url /public -d ../public
    echo "------------------------------"
    echo "mv -f ../public/index.html ../" && mv -f ../public/index.html ../
fi
