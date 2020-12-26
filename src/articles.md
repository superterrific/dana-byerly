---
title: 'Articles'
layout: 'layouts/feed.html'
summary: 'Longer thoughts about front-end dev, design and side-projects'
pagination:
  data: collections.articles
  size: 10
permalink: 'articles{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
eleventyExcludeFromCollections: true
---
