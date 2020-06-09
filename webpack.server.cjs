const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.cjs')

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.cjs',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()]
}
module.exports = merge(baseConfig, serverConfig)