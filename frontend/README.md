run `trunk serve` to deploy on local. `trunk serve` also track css under style/css folder and when it has changed, webpack and tailwind builder will also ran.

before run github action for deploy, run `./deploy.sh` to build for github.io. `deploy.sh` will run `trunk build --release` and move all generated files into the folder named 'public' under root folder of this project except index.html.   
index.html will be moved to the root of this project.   

------

To use without github.io, just remove deploy.sh and use `trunk build`.   
Also remove index.html and public folder under root of this project.

------

If you are using this for your project github.io page, you need to modify `deploy.sh`.   
Change bash variable `PROJECT_NAME="/"` to `PROJECT_NAME="/your-project"` in `deploy.sh`.
