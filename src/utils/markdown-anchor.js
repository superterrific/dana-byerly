const slugify = (s) =>
  encodeURIComponent(
    String(s)
      .trim()
      .toLowerCase()
      .replace(/[\s+~\/]/g, "-")
      .replace(/[().`,%·'"!?¿:@*]/g, "")
  );

const defaultOptions = {
  anchorClass: 'anchor-link',
};

const anchor = (md, options) => {
  options = Object.assign({}, defaultOptions, options);

  md.renderer.rules.heading_open = function(tokens, index) {
    const contentToken = tokens[index + 1];
    const slug = slugify(contentToken.content);

    if (tokens[index].tag === 'h2' || 'h3') {
      return `<${
        tokens[index].tag
      } id="${slug}">`;
    }
    return `<${tokens[index].tag}>`;
  };

  md.renderer.rules.heading_close = function(tokens, index) {
    const contentToken = tokens[index - 1];
    const slug = slugify(contentToken.content);

    if (tokens[index].tag === 'h2' || 'h3') {
      return ` <a class="${
        options.anchorClass
      }" href="#${slug}">
      <span class="visually-hidden">permalink</span>
      <span aria-hidden="true">#</span>
      </a></${tokens[index].tag}>`;
    }
    return `</${tokens[index].tag}>`;
  };
};

module.exports = anchor;
