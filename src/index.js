const pdfjs = require('pdfjs-dist');


const range = size => [...Array(size).keys()];


async function parse(pdfData) {
  const document = await pdfjs.getDocument(pdfData);
  const metadata = (await document.getMetadata()).info;

  const pages = await Promise.all(
    range(document.numPages).map(pageNumber => document.getPage(pageNumber + 1)),
  );

  const pagesTextData = (await Promise.all(
    pages.map(async page => (await page.getTextContent()).items),
  ));

  const pagesText = pagesTextData.map(pageTextData => pageTextData.map(textData => textData.str));


  return {
    metadata,
    pages: pagesText,
  };
}

module.exports = parse;
module.exports.default = parse;
