#!/bin/zsh

if [ ! -d "./style/node_modules" ]; then
    echo "Installing node modules..."
    cd ./style && npm install
fi

if [ ! -f "./style/dist/main.css" ]; then
    echo "Building style..."
    cd ./style && npm run build
fi

if ! type "trunk" > /dev/null; then
    echo "trunk not installed."
    echo "check https://trunkrs.dev"
else
    trunk build --release --public-url /public -d ../public
    echo "------------------------------"
    echo "mv -f ../public/index.html ../" && mv -f ../public/index.html ../
fi
