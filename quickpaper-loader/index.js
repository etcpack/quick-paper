const splitFile = require('./splitFile');
const hash = require('hash-sum');
const renderFactory = require('./renderFactory');

module.exports = function (source) {

    let shortFilePath = this.filepath.replace(process.cwd(), '')

    const id = hash(shortFilePath);

    // 把原始内容切割成三段
    let { template, script, style } = splitFile(source);

    if (/\.paper$/.test(this.filepath)) {

        let xhtmlJson = require('@hai2007/algorithm').xhtmlToJson("<quick-paper>" + template + "</quick-paper>");
        let code = renderFactory(xhtmlJson, id);

        let exportCode = `

    // 导入js
import script from '${shortFilePath}?QuickPaper&type=script&lang=js&hash=${id}';

    // 导入css
import '${shortFilePath}?QuickPaper&type=style&lang=css&hash=${id}';

    script.render=${code};

    export default script;
`;

        return exportCode;
    } else if (/\.paper\?QuickPaper\&type\=script\&lang\=js\&hash\=[0-9a-z]+$/.test(this.filepath)) {
        return script;
    } else if (/\.paper\?QuickPaper\&type\=style\&lang\=css\&hash\=[0-9a-z]+$/.test(this.filepath)) {
        return style;
    }

};
