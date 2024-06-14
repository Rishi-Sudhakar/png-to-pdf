const pngToPdf = require('./index');
const path = require('path');

const inputPath = path.resolve(__dirname, 'example.png');
const outputPath = path.resolve(__dirname, 'output.pdf');

pngToPdf(inputPath, outputPath)
  .then(() => {
    console.log('Test completed successfully!');
  })
  .catch(err => {
    console.error('Test failed:', err);
  });
