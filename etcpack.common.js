const QuickPaperLoaderPlugin = require('./quickpaper-loader-plug/index.js');

module.exports = {

    // 打包入口
    entry: './src/index.js',

    // 打包出口
    output: 'build/main.js',

    redirect: {
        'quick-paper': "./src/lib/quick-paper.js"
    },

    loader: [{
        test: /\.js$/,
        handler: ['@etcpack/babel-loader']
    },
    {
        test: /\.(css|scss)$/,
        handler: ['./quickpaper-style-loader/index.js', '@etcpack/scss-loader']
    }, {
        test: /\.paper$/,
        handler: ['./quickpaper-loader/index.js']
    }],
    plug: [
        new QuickPaperLoaderPlugin()
    ]
};
