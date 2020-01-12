// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    //'react-hot-loader/patch', // activate HMR for React
    //'webpack-dev-server/client?http://localhost:5000',// bundle the client for webpack-dev-server and connect to the provided endpoint
    //'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './index.tsx', // the entry point of our app
    './main.tsx'
  ],  
  devServer: {
    port:5000,
    hot: true, // enable HMR on the server
  },
  output:{
    library:"tsApp",
    libraryTarget:"window"
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ],
});
