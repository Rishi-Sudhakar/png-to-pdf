const { PDFDocument } = require('pdf-lib');
const sharp = require('sharp');
const fs = require('fs');

/**
 * Converts a PNG image to a PDF file.
 * @param {string} inputPath - The path to the input PNG file.
 * @param {string} outputPath - The path to the output PDF file.
 */
async function pngToPdf(inputPath, outputPath) {
  try {
    // Read the image and get its dimensions
    const image = await sharp(inputPath).png().toBuffer();
    const { width, height } = await sharp(inputPath).metadata();

    // Create a PDF document
    const pdfDoc = await PDFDocument.create();

    // Add a blank page to the document
    const page = pdfDoc.addPage([width, height]);

    // Embed the image
    const pngImage = await pdfDoc.embedPng(image);

    // Draw the image onto the page
    page.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: width,
      height: height,
    });

    // Serialize the PDF document to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Write the PDF to a file
    fs.writeFileSync(outputPath, pdfBytes);

    console.log('Conversion successful!');
  } catch (error) {
    console.error('Conversion failed:', error);
  }
}

// Export the function for use in other files
module.exports = pngToPdf;
