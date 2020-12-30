let path = require('path');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.test$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    devtool: 'source-map'
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production ? false : 'eval-sourcemap';

    return conf;
}