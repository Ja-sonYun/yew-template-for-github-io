![gh-pages-publish](https://github.com/ja-sonyun/yew-template-for-github-io/actions/workflows/publish_gh_pages.yml/badge.svg)

## [Yew](https://yew.rs/) Template for Github.io
Yew template that deployable as is for github.io (or [as a normal yew template](https://github.com/Ja-sonYun/yew-template-for-github-io#as-a-normal-templatenot-for-githubio) with css/scss stuffs without github.io), with [tailwind.css](https://tailwindcss.com/) and webpack with your css/scss and [trunk](https://trunkrs.dev) for build.

[About github.io](https://pages.github.com/)  

```
main branch
├── index.html
│
├── css                       # css/scss
│   ├── index.css
│   ├── index.scss
│   ├── main.scss
│   └── tailwind
│       └── tailwind_base.css
│
├── src                       # yew here
│   └── main.rs
│
├── static
│   └── 404.html
│
├── README.md
├── Cargo.lock
├── Cargo.toml
├── Trunk.toml
├── package.json
├── tailwind.config.js
└── webpack.config.js

gh-pages branch
├── index.html
├── 404.html
├── index-7823f64dca35d01f.js
├── index-7823f64dca35d01f_bg.wasm
└── main-baa4389a63fdea1b.css
```

## Things that you need to do

Go Setting > Code and automation > Pages > Github Pages > Source and change branch from main to gh-pages. if not exists, create new branch named gh-pages.   
[github action](https://github.com/Ja-sonYun/yew-template-for-github-io/blob/main/.github/workflows/publish_gh_pages.yml) is cofigured. just push your codes to the main branch, and then outputs of `trunk build --release` will automatically deployed.  
While running `trunk serve`, trunk will watch static and css folder, and do compile for all codes include css/scss in css folder when they had any changes like rust codes in src.

## For {username}.github.io page

you need to modify [this line](https://github.com/Ja-sonYun/yew-template-for-github-io/blob/main/Trunk.toml#L5-L7)
and [this line](https://github.com/Ja-sonYun/yew-template-for-github-io/blob/main/static/404.html#L25) to 0  
also check `./src/main.rs`

## For {username}.github.io/{project_name} page

you need to modify [this line](https://github.com/Ja-sonYun/yew-template-for-github-io/blob/main/Trunk.toml#L5-L7)
and [this line](https://github.com/Ja-sonYun/yew-template-for-github-io/blob/main/static/404.html#L25) to 1
also check `./src/main.rs`   
To serve the project on your machine correctly, run `trunk serve --public-url=/{project_name}/`

## As a normal template(not for github.io)

To use without github.io, open `Trunk.toml` and remove [`public_url`](https://github.com/Ja-sonYun/yew-template-for-github-io/blob/main/Trunk.toml#L5) field.  
Also remove `404.html` in static folder and [this line](https://github.com/Ja-sonYun/yew-template-for-github-io/blob/main/index.html#L7) in `index.html`.  
Lastly remove `.github/workflow` folder.

## Using Custom Domain

go to `./.github/workflows/publish_gh_pages.yml` and add your domain in cname field.  

## Routing

Using `static/404.html`. for more information, checkout https://github.com/rafgraph/spa-github-pages.  
