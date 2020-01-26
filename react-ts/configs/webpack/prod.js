// production config
const merge = require('webpack-merge');
const {resolve} = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: [
    //'react-hot-loader/patch', // activate HMR for React
    //'webpack-dev-server/client?http://localhost:5000',// bundle the client for webpack-dev-server and connect to the provided endpoint
    //'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './index.tsx', // the entry point of our app
    './main.tsx'
  ], 
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
    library:"tsApp",
    libraryTarget:"window"
  },
  devtool: 'source-map',
  plugins: [],
});
