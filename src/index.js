const pdfjs = require("pdfjs-dist");
const range = require("lodash.range");

async function parse(pdfData) {
  const document = await pdfjs.getDocument(pdfData);
  const metadata = (await document.getMetadata()).info;

  const pages = await Promise.all(
    range(1, document.numPages + 1).map(pageNumber =>
      document.getPage(pageNumber)
    )
  );

  const pagesTextData = (await Promise.all(
    pages.map(async page => (await page.getTextContent()).items)
  ))

  const pagesText = pagesTextData.map(pages => pages.map(textData => textData.str));


  return {
    metadata,
    pages: pagesText,
  };
}

module.exports = parse;
module.exports.default = parse;