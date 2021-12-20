const splitFile = require('./splitFile');
const hash = require('hash-sum');
const renderFactory = require('./renderFactory');

module.exports = function (source) {

    let shortFilePath = this.filepath.replace(process.cwd(), '')

    const id = hash(shortFilePath);

    console.log(this.filepath);
    console.log(shortFilePath);

    // 把原始内容切割成三段
    let { template, script, style } = splitFile(source);

    let xhtmlJson = require('@hai2007/algorithm').xhtmlToJson("<quick-paper>" + template + "</quick-paper>");
    let code = renderFactory(xhtmlJson, id);

    let exportCode = `

    // 导入js
import script from '${shortFilePath}?QuickPaper&type=script&lang=js&hash=${id}&';

    // 导入css
import '${shortFilePath}?QuickPaper&type=style&lang=css&hash=${id}&';

    script.render=${code};

    export default script;
`;

console.log(exportCode);

    return exportCode;

};
