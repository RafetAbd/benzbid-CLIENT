const path = require('path');

module.exports = {
    // set mode to development
    mode: 'development',
    // set entry point to ./src/index.js
    entry: './src/index.tsx',
    // set output to ./dist/bundle.js
    output: {
        filename: 'bundle.js',
        // set path to ./dist
        path: path.resolve(__dirname, 'dist'),
        // set public path to /dist
        publicPath: '/dist/'
    },
    // set devtool to source-map, will be used for debugging
    devtool : 'inline-source-map',

    resolve: {
        // add '.ts'  '.js', '.jsx' and '.tsx' as resolvable extensions
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        // set rules for modules
        rules: [
            {
                // find any file with a'.tsx' extension
                test: /\.tsx?$/,
                // use the ts-loader to load these files
                loader: 'ts-loader',
                // exclude node_modules
                exclude: /node_modules/
            }
        ]
    },
    // set dev server to fallback to index.html
    devServer: {
        historyApiFallback: true
    }
};
