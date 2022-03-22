## Yew Template
yew template that usable directly for github.io.

```
Directory
├── CNAME
├── Cargo.toml
├── README.md
├── frontend
│   ├── Cargo.toml
│   ├── README.md
│   ├── Trunk.toml              # run 'trunk serve' to serve on local,
│   │                           # css under style folder will also tracked.
│   │  
│   ├── deploy.sh               # run 'deploy.sh' before deploy to build for release.
│   ├── index.html
│   ├── src                     # yew source files
│   │   └── main.rs
│   ├── static
│   └── style                   # run 'npm run build' to build scss and tailwind.
│       ├── README.md
│       ├── css                 # css under here
│       │   ├── index.scss
│       │   ├── main.scss
│       │   └── tailwind_base.css
│       ├── package.json
│       ├── tailwind.config.js
│       └── webpack.config.js
│
│  *FILES UNDER HERE WILL USED FOR DEPLOY*
├── index.html
└── public
    ├── index-14b268017422958e.js
    ├── index-14b268017422958e_bg.wasm
    ├── main-fe645a1dfac56aa7.css
    └── tailwind-b6199c5633ae30d.css
```

## First setup

move to the folder under frontend/style, run `npm i && npm run build`.   
after that, to watch and serve on local yew project, run `trunk serve` under frontend folder.   
before deploy, move to the frontend and run `./deploy.sh`, and push into github repository.   
