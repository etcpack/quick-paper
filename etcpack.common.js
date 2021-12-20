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
        test: /\.css$/,
        handler: ['./quickpaper-style-loader/index.js', '@etcpack/scss-loader']
    }, {
        test: /\.paper$/,
        handler: ['./quickpaper-loader/index.js']
    }, {
        test: /\.paper\?QuickPaper\&type\=script\&lang\=js&hash\=[0-9a-z]+$/,
        handler: ['./quickpaper-loader/index.js']
    }, {
        test: /\.paper\?QuickPaper\&type\=style\&lang\=css\&hash\=[0-9a-z]+$/,
        handler: ['./quickpaper-style-loader/index.js', '@etcpack/scss-loader', './quickpaper-loader/index.js']
    }],
    plug: [
        new QuickPaperLoaderPlugin()
    ]
};
