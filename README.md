# PNG to PDF Converter

## Description

**PNG to PDF Converter** is a simple and efficient tool that converts PNG images to PDF files. This package leverages the power of `pdf-lib` and `sharp` to provide a seamless and high-quality conversion experience.

## Features

- **Fast Conversion**: Convert PNG images to PDF in seconds.
- **High Quality**: Maintains the original quality of the PNG images.
- **Easy to Use**: Simple API for quick integration.
- **Cross-Platform**: Works on Windows, MacOS, and Linux.

## Installation

To install the package, use npm:

```bash
npm install png-to-pdf
```

## Usage

### Convert a PNG to a PDF

You can use the `pngToPdf` function to convert a PNG file to a PDF file. Below is an example of how to use it:

```javascript
const pngToPdf = require('png-to-pdf');
const path = require('path');

const inputPath = path.resolve(__dirname, 'input.png');
const outputPath = path.resolve(__dirname, 'output.pdf');

pngToPdf(inputPath, outputPath)
  .then(() => {
    console.log('Conversion successful!');
  })
  .catch(err => {
    console.error('Conversion failed:', err);
  });
```

### Command Line Usage

If you prefer using the command line, you can run the conversion with a simple command:

```bash
node test.js <input-png-path> <output-pdf-path>
```

For example:

```bash
node test.js input.png output.pdf
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Acknowledgements

- [pdf-lib](https://github.com/Hopding/pdf-lib) - A powerful PDF library for JavaScript.
- [sharp](https://github.com/lovell/sharp) - The high-performance image processing library.

## Screenshots
<img width="710" alt="Screenshot 2024-06-14 at 9 04 59 PM" src="https://github.com/Rishi-Sudhakar/png-to-pdf/assets/79398572/16e890b6-6001-433c-b992-00bffb46fd25">

