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

// babel

// task1 
(инициализация зависимостей (file package.json))
npm init -y

npm i -D @babel/core @babel/cli

В package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build:scripts": "babel ./src --out-dir=./dist"
  },


в файле .babelrc 
{
  "plugins": ["@babel/plugin-proposal-object-rest-spread"]
}

npm i -D @babel/plugin-proposal-object-rest-spread

//// Presets

npm i -S core-js@3 ( для полифилов )

npm i -D @babel/code @babel/cli (обязательно при установке зависимостей)
npm i -D @babel/preset-env