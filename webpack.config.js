module.exports = {
    devtool: 'source-map',
    entry: './app.js',
    output: {
        path: './public',
        filename: './build.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: './public',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    cacheDirectory: false,
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    },
    cache: false,
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
