#!/usr/bin/env node

const fs = require('fs-extra');
const pdfParser = require('./index');

const fileNames = process.argv.slice(2);

const printOutput = data =>
  console.log(JSON.stringify(data.length === 1 ? data[0] : data, null, 4));

const parsePDFFile = async (fileName) => {
  try {
    const pdfData = await fs.readFile(fileName);
    const parsedPdf = await pdfParser(pdfData);

    return parsedPdf;
  } catch (e) {
    console.error(`Failied to parse ${fileName}`);

    return null;
  }
};

Promise.all(fileNames.map(parsePDFFile)).then(printOutput);
