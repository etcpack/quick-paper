const addStylesId = require('./addStylesId');

module.exports = function (source) {

    if (/\.paper\?QuickPaper\&type\=style\&lang\=css\&hash\=[0-9a-z]+$/.test(this.filepath)) {
        source = addStylesId(this.filepath.split('hash=')[1], source);
    }

    return source;
};
