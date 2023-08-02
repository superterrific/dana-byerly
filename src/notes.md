---
title: 'Notes'
layout: 'layouts/feed.html'
summary: 'Brief thoughts about front-end dev, design and side-projects'
pagination:
  data: collections.notes
  size: 30
permalink: 'notes{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
eleventyExcludeFromCollections: true
---
