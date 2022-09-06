---
title: 'Changelog'
layout: 'layouts/feed.html'
summary: 'Details about updates...'
pagination:
  data: collections.changelog
  size: 20
permalink: 'changelog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
eleventyExcludeFromCollections: true
---
A running list of updates inspired by [Tatiana Mac's Release Notes](https://tatianamac.com//release-notes).
