const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src', 'App.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.join(__dirname, 'src', 'components'),
            data: path.join(__dirname, 'src', 'data'),
            reducer: path.join(__dirname, 'src', 'reducer'),
            chat: path.join(__dirname, 'src', 'components', 'chat'),
            profile: path.join(__dirname, 'src', 'components', 'profile'),
            game: path.join(__dirname, 'src', 'components', 'game'),
            chats: path.join(__dirname, 'src', 'components', 'chat', 'chats'),
            messages: path.join(__dirname, 'src', 'components', 'chat', 'messages'),

        }
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        historyApiFallback: true
    }
}