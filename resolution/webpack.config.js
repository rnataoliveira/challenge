var webpack = require('webpack')

module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        path: __dirname + '/public',
        filename: 'app.min.js'
    },
    devServer: {
        inline: true,
        contentBase: __dirname + '/public',
        port: 3333
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-2']
            }
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })
    ]
}