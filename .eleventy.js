const { DateTime } = require('luxon');
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const CleanCSS = require('clean-css');
const markdownIt = require('markdown-it');
const markdownAnchor = require('./src/utils/markdown-anchor');


// Create production flag
const isProduction = process.env.NODE_ENV === 'production';

module.exports = config => {

  // Date filters
  config.addFilter('longDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('LLLL dd, yyyy');
  });

  config.addFilter('isoDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  config.addFilter('w3Date', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toISO();
  });

  // Limit amount of posts displayed
  config.addFilter('limit', function (arr, limit) {
    return arr.slice(0, limit);
  });

  // Shortcodes
  config.addPairedShortcode('caption', function(content) {
    return `<p class="caption">${content}</p>`
  });

  config.addPairedShortcode('figure', function(content) {
    return `<figure class="fig-container">${content}</figure>`
  });

  config.addPairedShortcode('figcaption', function(content) {
    return `<figcaption>${content}</figcaption>`
  });

  config.addPairedShortcode('fullbleed', function(content) {
    return `<div class="full-bleed">${content}</div>`
  });

  config.addPairedShortcode('embedVideo', function(content) {
    return `<div class="video-player"><iframe src="https://www.youtube-nocookie.com/embed/${content}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
  });

  config.addPairedShortcode('nowrap', function(content) {
    return `<span class="no-wrap">${content}</span>`
  });

  // Minify
  config.addFilter('cssmin', function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Plugins
  config.addPlugin(syntaxHighlight);
  config.addPlugin(rssPlugin);

  // Set directories to pass through to the public folder
  config.addPassthroughCopy('./src/img/');
  config.addPassthroughCopy('./src/manifest.json');
  config.addPassthroughCopy('./src/fonts/');
  config.addPassthroughCopy('./src/robots.txt');
  config.addPassthroughCopy('./src/js/');

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

  config.addCollection("devto", function (collection) {
  return collection.getAll().filter((post) => post.data.devto);
  });

// Markdown and anchor options
  const markdownOptions = {
    html: true,
    breaks: false,
    linkify: true,
    typographer: true,
  };

  config.setLibrary('md', markdownIt(markdownOptions).use(markdownAnchor));

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
