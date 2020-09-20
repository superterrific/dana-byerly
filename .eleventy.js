const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const CleanCSS = require('clean-css');

// Transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

// Create production flag
const isProduction = process.env.NODE_ENV === 'production';

module.exports = config => {

  // Filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  // Limit amount of posts displayed
  config.addFilter('limit', function (arr, limit) {
    return arr.slice(0, limit);
  });

  // Shortcodes
  config.addPairedShortcode('quote', function(content) {
    return `<blockquote>${content}</blockquote>`
  });

  config.addPairedShortcode('caption', function(content) {
    return `<div class="caption">${content}</div>`
  });

  config.addPairedShortcode('figure', function(content) {
    return `<figure class="fig-container">${content}</figure>`
  });

  config.addPairedShortcode('figcaption', function(content) {
    return `<figcaption>${content}</figure>`
  });

  config.addPairedShortcode('fullbleed', function(content) {
    return `<div class="full-bleed">${content}</div>`
  });

  config.addPairedShortcode('embedVideo', function(content) {
    return `<div class="video-player"><iframe src="https://www.youtube-nocookie.com/embed/${content}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
  });

  // Minify
  config.addFilter('cssmin', function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  // Plugins
  config.addPlugin(syntaxHighlight);
  config.addPlugin(rssPlugin);

  // Set directories to pass through to the public folder
  config.addPassthroughCopy('./src/img/');
  config.addPassthroughCopy('./src/css/');
  config.addPassthroughCopy('./src/fonts/');

 // Collections
  config.addCollection('projects', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/projects/*.md'));
  });

  config.addCollection('writing', collection => {
    return [...collection.getFilteredByGlob(['./src/articles/*.md', './src/notes/*.md'])].reverse();
  });

  config.addCollection('articles', collection => {
    return [...collection.getFilteredByGlob('./src/articles/*.md')].reverse();
  });

  config.addCollection('notes', collection => {
    return [...collection.getFilteredByGlob('./src/notes/*.md')].reverse();
  });

  config.addCollection('changelog', collection => {
    return [...collection.getFilteredByGlob('./src/changelog/*.md')].reverse();
  });

    return {
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dir: {
        input: 'src',
        output: 'public'
      }
    };
  };
