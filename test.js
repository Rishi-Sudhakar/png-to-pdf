const pngToPdf = require('./index');
const path = require('path');

// Check if the correct number of arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: node test.js <input-png-path> <output-pdf-path>');
  process.exit(1);
}

const inputPath = path.resolve(__dirname, process.argv[2]);
const outputPath = path.resolve(__dirname, process.argv[3]);

pngToPdf(inputPath, outputPath)
  .then(() => {
    console.log('Conversion successful!');
  })
  .catch(err => {
    console.error('Conversion failed:', err);
  });
