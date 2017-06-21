# WebpackSkeleton
This repo holds Webpack skeleton, which has pretty much every functionality that is needed for a web application. Just add your file paths and start coding!

Steps to Reproduce the repo:

# Step 1
(sudo is to run as admin, I am not sure but I think windows user can ignore that part)\n
sudo npm i webpack webpack-dev-server --save-dev -g\n
sudo npm i babel babel-core babel-loader babel-preset-es2015 --save-dev\n
sud0 npm i react react-dom --save-dev\n
sudo npm install babel-core babel-loader jshint jshint-loader node-libs-browser babel-preset-es2015 babel-preset-react webpack  --save-dev\n
sudo npm install babel-loader eslint-loader uglifyjs-webpack-plugin extract-text-webpack-plugin css-loader sass-loader resolve-url-loader copy-webpack-plugin glob-all --save-dev

# Step 2
Create webpack.config.js file

# Step 3
Declare the plugins needed in config file

Here is the Snippet to add in webpack.config.js file

var webpack = require('webpack');
var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ConcatPlugin = require('webpack-concat-plugin');
var glob = require("glob-all");
var CopyWebpackPlugin = require('copy-webpack-plugin');

# Step 4
To simpilify the webpack, I will make module.exports as array and create multiple objects inside it.

module.exports = [

//SCSS to CSS
{
},

//ES6 to ES5
{
},

//Minify the Files
{
},

//JSHINT
{
},

//Copy
{
}

]
