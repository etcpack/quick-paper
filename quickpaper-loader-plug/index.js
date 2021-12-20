function QuickPaperLoaderPlugin() { }

QuickPaperLoaderPlugin.prototype.before = function (config) {

    let jsLoader, cssLoader, paperLoader;
    for (let item of config.loader) {

        if (item.test.test('xxx.paper')) {
            paperLoader = item.handler;
        }

        if (item.test.test('xxx.css')) {
            cssLoader = item.handler;
        }

        if (item.test.test('xxx.js')) {
            jsLoader = item.handler;
        }

    }

    config.loader.push({
        test: /\.paper\?QuickPaper\&type\=script\&lang\=js&hash\=[0-9a-z]+$/,
        handler: [...jsLoader, ...paperLoader]
    });

    config.loader.push({
        test: /\.paper\?QuickPaper\&type\=style\&lang\=css\&hash\=[0-9a-z]+$/,
        handler: [...cssLoader, ...paperLoader]
    });

};

module.exports = QuickPaperLoaderPlugin;
