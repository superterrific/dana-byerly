---
title: 'Tag Archive'
layout: 'layouts/feed.html'
pagination:
  data: collections
  size: 1
  alias: tag
permalink: '/tag/{{ tag | slug }}/'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
eleventyExcludeFromCollections: true
---
