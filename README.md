## Yew Template for Github.io
Yew template that usable directly for github.io (or as the normal yew template with css／scss stuffs without github.io).

[About github.io](https://pages.github.com/)  

```
Directory
├── Cargo.lock
├── Cargo.toml
├── README.md
├── Trunk.toml
├── index_base.html            # index.html for trunk.
│
│  =======================================,
│    *THESE FILES ARE USED FOR GITHUB.IO* |
├── index.html                            |
├── public                                |
│   ├── index-7823f64dca35d01f.js         |
│   ├── index-7823f64dca35d01f_bg.wasm    |
│   └── main-baa4389a63fdea1b.css         |
│  ======================================='
│
├── src
│   └── main.rs                # Add your rust codes under here.
├── static
└── style
    ├── README.md
    ├── css                    # Add your css/scss under here.
    │   ├── index.css          # To build css, run 'npm run build'.
    │   ├── index.scss
    │   └── main.scss
    ├── package-lock.json
    ├── package.json
    ├── tailwind
    │   └── tailwind_base.css
    ├── tailwind.config.js
    └── webpack.config.js
```

## First setup

run `cd ./style && npm i && npm run build` before run trunk command.

## Flow

Add your yew codes into src. Add your css/scss into style/css.   
Before deploy your project into github.io, run `trunk build --release`, And, just push to your repo or run github action manually.   
With `--release` options will perform move generated `index.html` by trunk into the root of this project.   

`trunk clean` won't remove index.html on root directory. You need to delete it manually.

## For your project github.io page(not the username github.io)

If you are using this for your project github.io page, you need to modify `Trunk.toml`.   
Change toml variable `public_url="/public"` to `public_url="/public/{your-project-name}"` in `Trunk.toml`.


## As a normal template(not for github.io)

To use without github.io, open `Trunk.toml` and remove the last hooks. You can see the comment.   
Also remove index.html and public folder under root of this project.


## TODO

Currently routing doesn't work
