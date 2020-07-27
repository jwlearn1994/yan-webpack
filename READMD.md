# Webpack template

## Install

``` bash
npm install
```


## Usage

- Start dev server, serve `dist` folder as localhost:8080 root

[Click Here](http://localhost:8080)

``` bash
TARGET=[website] npm run serve
```

- Compile to dev

``` bash
TARGET=[website] npm run dev
```

- Bundle for production

``` bash
TARGET=[website] npm run build
```

- Compile SCSS

from `src/scss` to `styles`

``` bash
npm run scss
```


## Folder Structure

### views

HTML source files, files will be copied into dist folder after bundling.

### styles

Compiled css files, will be copied into dist folder after bundling.

### src

Main website development files.

### dist

Bundled static files folder, used for production deploy.

### node_modules

nodejs package folder, will be ignore by .git