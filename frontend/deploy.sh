#!/bin/bash

PROJECT_NAME=""
# add your project name like below (slash necessary at the front of the string),
# if you're using this template for your project github.io page.
# PROJECT_NAME="/your-project"

cd ./style
[[ ! -d "node_modules" ]] && echo "Installing node modules..." && npm install
[[ ! -f "dist/main.css" ]] && echo "Building style..." && npm run build
cd ..

if ! type "trunk" > /dev/null; then
    echo "trunk not installed."
    echo "check https://trunkrs.dev"
else
    trunk build --release --public-url $PROJECT_NAME/public -d ../public
    echo "------------------------------"
    echo "mv -f ../public/index.html ../" && mv -f ../public/index.html ../
fi
