var path = require('path');

 module.exports = {
    watch: true,
    resolve: {
  	root: [ path.resolve('./client') ]
	  },
     entry: {
       app: './client/index.js',
     },
     output: {
         path: './public/js',
         filename: '[name].js'
     },
     module: {
      loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         },
          {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        }
      ]
     }
 }
