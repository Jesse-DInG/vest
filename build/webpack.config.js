var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        popup: './src/popup.ts',
        background: './src/background',
        vendor: ['vue', 'vuex']
    },
    output: {
        path: resolve('./dist/'),
        filename: '[name].js',
        publicPath: './',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts'],
        alias: {
            // 'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [{
            test: /\.(ts)$/,
            loader: 'tslint-loader',
            enforce: 'pre',
            include: [resolve('src'), resolve('test')],
            // options: {
            //     formatter: require('eslint-friendly-formatter')
            // }
        },

        // {
        //   test: /\.js$/,
        //   loader: 'babel-loader',
        //   include: [resolve('src'), resolve('test')]
        // },
        {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/\.vue$/]
            }
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                esModule: true
            }
        },
        {
            test: /\.less$/,
            loader: ['style-loader','css-loader','less-loader']
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: '[name].[hash:7].[ext]'
            }
        }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CopyWebpackPlugin([{ from: 'static', to: '' }]),
        new FriendlyErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
    ]
}
