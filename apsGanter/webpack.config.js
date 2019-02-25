const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        index: path.resolve(__dirname, 'index.html'),
        compress: true,
        port: 9000
    },
    entry: './apsGanter',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", {"legacy": true}],
                            ["@babel/plugin-proposal-class-properties", {"loose": true}]
                        ]
                    }
                }
            }
        ]
    }
}