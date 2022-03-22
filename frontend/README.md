run `trunk serve` to deploy on local.  
`trunk serve` also track css under style/css folder and when it has changed,   
webpack and tailwind builder will also ran.  

before deploy, run `./deploy.sh` to build for github.io, and push this project.   
`deploy.sh` will run `trunk build --release` and move all generated files into  
the folder named 'public' under root folder of this project except index.html.   
index.html will be moved to the root of this project.   
after that, just push it.
