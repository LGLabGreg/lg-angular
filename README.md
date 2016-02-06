# lg-angular
Base angular framework with Grunt

## Requirements

* Git
* NPM
* GruntCi
* Ruby
* Compass

## Install

1. $ npm install -g grunt-cli
2. $ git clone https://github.com/LGLabGreg/lg-angular.git
3. npm install

## Grunt tasks

### grunt build
    * concat/uglyfing/minify js and sass from src folder to build folder
    * copy html files and images into build folder

### grunt development
    * same as build plus watch for file changes in src folder and start local server on port 8000

## Config
The project contains a config file (src/app/config/config.js). 
