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
│   ├── deploy.sh               # run 'deploy.sh' before run github action for github.io
│   ├── index.html
│   ├── src                     # yew source files
│   │   └── main.rs
│   ├── static
│   └── style                   # run 'npm run build' to build scss and tailwind.
│       ├── README.md
│       ├── css                 # css under here
│       │   ├── index.scss
│       │   ├── main.scss
│       │   └── index.css
│       ├── tailwind
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
    └── main-fe645a1dfac56aa7.css
```

## First setup

move to the folder under frontend/style, run `npm i && npm run build`.   
after that, to watch and serve on local yew project, run `trunk serve` under frontend folder.   
before deploy(run github action for github.io), move to the frontend and run `./deploy.sh` to apply   
new changes.
