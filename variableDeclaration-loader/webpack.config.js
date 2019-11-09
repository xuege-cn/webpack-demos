const path = require('path')

module.exports = {
    mode: 'development',
    entry: './index.js',
    module: {
        rules: [{
            test: /\.js$/,
            loader: path.resolve('./loader.js'),
            options: {
                name: 'xuege'
            }
        }]
    }
}