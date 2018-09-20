PDF Text Parser
===============

[![Version](https://img.shields.io/npm/v/pdf-text-parser.svg)](https://npmjs.org/package/pdf-text-parser)
[![Downloads](https://img.shields.io/npm/dt/pdf-text-parser.svg)](https://npmjs.org/package/pdf-text-parser)
[![Downloads/week](https://img.shields.io/npm/dw/pdf-text-parser.svg)](https://npmjs.org/package/pdf-text-parser)
[![License](https://img.shields.io/npm/l/pdf-text-parser.svg)](https://github.com/GonzaloRizzo/pdf-text-parser/blob/master/package.json)


Parses PDF's text in a nice and simple format

## Usage

```javascript
const fs = require('fs')
const pdfParser = require('pdf-text-parser');

const pdfData = fs.readFileSync('file.pdf');
pdfParser(pdfData)
  .then(parsedText => console.log(parsedText));
```

## CLI Usage
```sh-session
$ pdf-text-parser file.pdf
```

## Output Format
```json
{
   "metadata":{
      "Title":"Example Output"
   },
   "pages":[
      [
         "Fist Page"
      ],
      [
         "Second Page"
      ]
   ]
}
```