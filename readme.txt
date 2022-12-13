install modules 

npm i -D jest 

npm i -D @babel/preset-env

npm i -D sass

npm i -D npm-run-all

npm i -D jest @babel/preset-env sass npm-run-all


(В папке с package.json)
.babelrc (files)
{
  "presets": ["@babel/preset-env"]
}


 "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "build:styles": "sass ./src/styles/index.scss ./dist/styles.css",
    "copy:html": "cp ./src/index.html ./dist/index.html",
    "copy:scripts": "cp  -R ./src/scripts ./dist/scripts",
    "clean": "rm -rf ./dist",
    "build": "npm-run-all clean build:styles copy:*"
  },




npm uninstall -D  jest @babel/preset-env sass npm-run-all