const {dest, src} = require('gulp');
const GetGoogleFonts = require('get-google-fonts');

const fonts = async () => {
  // Setup of the library instance by setting where we want
  // the output to go. CSS is relative to output font directory
  const instance = new GetGoogleFonts({
    outputDir: './public/fonts',
    cssFile: './fonts.css'
  });

  // Grabs fonts and CSS from google and puts in the public folder
  const result = await instance.download(
    'https://fonts.googleapis.com/css2?family=Bitter:wght@400;500;600;700&family=Shrikhand&display=fallback'
  );

  return result;
};

module.exports = fonts;
