# WebpackSkeleton
This repo holds Webpack skeleton, which has pretty much every functionality that is needed for a web application. Just add your file paths and start coding!

Steps to Reproduce the repo:

# Step 1
(sudo is to run as admin, I am not sure but I think windows user can ignore that part)<br />
sudo npm i webpack webpack-dev-server --save-dev -g<br />
sudo npm i babel babel-core babel-loader babel-preset-es2015 --save-dev<br />
sud0 npm i react react-dom --save-dev<br />
sudo npm install babel-core babel-loader jshint jshint-loader node-libs-browser babel-preset-es2015 babel-preset-react webpack  --save-dev<br />
sudo npm install babel-loader eslint-loader uglifyjs-webpack-plugin extract-text-webpack-plugin css-loader sass-loader resolve-url-loader copy-webpack-plugin glob-all --save-dev<br />

# Step 2
Create webpack.config.js file

# Step 3
Declare the plugins needed in config file

Here is the Snippet to add in webpack.config.js file

var webpack = require('webpack');<br />
var path = require('path');<br />
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');<br />
var ExtractTextPlugin = require('extract-text-webpack-plugin');<br />
var ConcatPlugin = require('webpack-concat-plugin');<br />
var glob = require("glob-all");<br />
var CopyWebpackPlugin = require('copy-webpack-plugin');<br />

# Step 4
To simpilify the webpack, I will make module.exports as array and create multiple objects inside it.<br />

module.exports = [<br />

//SCSS to CSS
{
},<br />

//ES6 to ES5
{
},<br />

//Minify the Files
{
},<br />

//JSHINT
{
},<br />

//Copy
{
}<br />

]<br />
