
var webpack = require('webpack');
var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var glob = require("glob-all");


module.exports = [
	{
		entry: {
			'css/after.css': './scss/before.scss'
		},

		output: {
			filename: '[name]'
		},

		module: {
	        loaders: [
		        {
			        test: /\.scss$/,
			        loaders: ExtractTextPlugin.extract({
			          	use: ['css-loader', 'resolve-url-loader', 'sass-loader']
			        })
		    	},
	    	]
		},

		plugins:[
			new ExtractTextPlugin({ // define where to save the file
	            filename: '[name]'
	        })
		]
	},
	{
		entry:{
			'es5/after.js': './es6/before.js'
		},

		output: {
			filename: '[name]'
		},

		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					options: {
						presets: ['env', 'es2015', 'react']
					},
				}
			]
		}
	},

	//For Minifying CSS and JavaScript
	{
		entry:{
			'minify/minify.min.js' : './minify/minify.js',
			'minify/minify.min.css' : './minify/minify.css'
		},

		output: {
			filename: '[name]'
		},

	    module: {
		    loaders: [
		        {
		            test: /\.css$/i,
		            use: ExtractTextPlugin.extract({
		                use: {
		                    loader: 'css-loader',
		                    options: {
		                        minimize: true,
		                        beautify: true
		                    }
		                }
		            })
		        }
	    	],
	    },

		plugins: [
			new UglifyJSPlugin({
				minimize: true,
				beautify: true
			}),
			new ExtractTextPlugin({ // define where to save the file
	            filename: 'minify/minify.min.css'
	        }),

		]
	},
	{
		entry: './jshint/jshint.js',

		output: {
			filename: '[name]'
		},

		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: 'jshint-loader',
					exclude: /node_modules/,
		            options: {
		                "esversion": 6,
		                "jquery": true,
		                "strict": false,
		                "shadow": true,
		                globals: {
		                    "jQuery": true,
		                    "$": true,
		                    "React":true,
		                    "ReactDOM":true,
		                    "Cookies": true,
		                    "curly": true,
		                    "eqeqeq": true,
		                    "eqnull": true,
		                    "forin": true,
		                    "browser": true,
		                }
		            },
	        	}
			]
		},
	}
]
