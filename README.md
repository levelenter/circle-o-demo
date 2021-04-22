# circle-o

## 概要

generateして本番サーバーに設置する

## 事前準備
env.zipを解凍し.envファイル等をプロジェクトルートディレクトリに設置

## 本番リリース

### generate

```bash
$ npm run generate:prod
```

- `./dist/`に出力されるので本番サーバーに設置

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

$ npm run clear-dist

# generate static project
$ npm run generate

```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

