const addStylesId = require('./addStylesId');
const styleLoader = require('@etcpack/style-loader');

module.exports = function (source) {

    if (/\.paper\?QuickPaper\&type\=style\&lang\=css\&hash\=[0-9a-z]+$/.test(this.filepath)) {
        source = addStylesId("data-quickpaper-" + this.filepath.split('hash=')[1], source);
    }

    return styleLoader(source);
};
