# Webpack Skeleton
This repo holds Webpack skeleton, which has pretty much every functionality that is needed for a web application. Just add your file paths and start coding!

Steps to Reproduce the repo:<br />

#### sudo is to run as admin, windows user can ignore that part<br />

# Step 1
sudo npm i webpack webpack-dev-server --save-dev -g<br />
<br />
sudo npm i babel babel-core babel-loader babel-preset-es2015 --save-dev<br />
<br />
sudo npm i react react-dom --save-dev<br />
<br />
sudo npm install babel-core babel-loader jshint jshint-loader eslint-loader node-libs-browser babel-preset-es2015 babel-preset-react babel-preset-react-env  --save-dev<br />
<br />
sudo npm install babel-loader eslint-loader uglifyjs-webpack-plugin extract-text-webpack-plugin css-loader node-sass sass-loader resolve-url-loader copy-webpack-plugin jquery glob-all --save-dev<br />
<br />

# Step 2
Create webpack.config.js file

# Step 3
Declare the plugins needed in config file

Here is the Snippet to add in webpack.config.js file

var webpack = require('webpack');<br />
<br />
var path = require('path');<br />
<br />
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');<br />
<br />
var ExtractTextPlugin = require('extract-text-webpack-plugin');<br />
<br />
var ConcatPlugin = require('webpack-concat-plugin');<br />
<br />
var glob = require("glob-all");<br />
<br />
var CopyWebpackPlugin = require('copy-webpack-plugin');<br />
<br />

# Step 4
To simpilify the webpack, I will make module.exports as array and create multiple objects inside it.<br />

module.exports = [<br />

//SCSS to CSS<br />
{
<br />
},<br />

//ES6 to ES5<br />
{
<br />
},<br />

//Minify the Files<br />
{
<br />
},<br />

//JSHINT<br />
{
<br />
},<br />

//Copy<br />
{
<br />
}<br />

]<br />

# Step 5

Enter "webpack" in terminal to build the modules
<br />
Enter "webpack-dev-server" to run the server, basically to leverage the livereload
<br />

#### You can see the output at localhost:8080


