const puppeteer = require('puppeteer');
const fs = require('fs');

inFile = process.argv[2] || 'input-sample.json';
outFile = process.argv[3] || 'output.pdf';

(async () => {
    let filename = 'output';
    let browser = null;

    console.log(inFile + ' and ' + outFile);

    try {
        let { digitalTemplate, printTemplate } = require('./niro.js').readyTemplates(JSON.parse(fs.readFileSync(inFile, 'utf-8').replace(/&nbsp;/g,' ').replace(new RegExp(String.fromCharCode(160), "g"), ' ').replace(new RegExp(String.fromCharCode(65533), "g"), ' ')));

        fs.writeFileSync(`template.html`, digitalTemplate);

        browser = await puppeteer.launch({
            headless: true,
        });

        let page = await browser.newPage();
        await page.goto(`file://${process.cwd()}/template.html`, 'utf8', {
            waitUntil: 'networkidle0'
        });

        await page.evaluateHandle('document.fonts.ready');
        await page.pdf({
            
            format: 'A4',
            path: `${outFile}`
        });
        console.log(`generated ${outFile}`);

        fs.unlinkSync(`template.html`);
} catch (error) {
    console.log(error.stack);
} finally {
    if (browser != null) {
        browser.close();
    }
}
})();