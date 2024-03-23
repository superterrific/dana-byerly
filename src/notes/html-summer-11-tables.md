---
title: "Hot HTML Summer: Tables"
summary: "The dog days of Hot HTML Summer are upon us."
date: 2023-07-11T13:00:00Z
htmlSection: "Tables"
htmlLink: "https://web.dev/learn/html/tables/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{% include "text/html-summer-series.html" %}{% endcaption %}

{% include "text/html-summer-module.html" %}

## Table elements, in order

Go to this [section at Learn HTML](https://web.dev/learn/html/tables/#table_elements_in_order).

> If the table maintains a selection state, has two-dimensional navigation, or allows the user to rearrange cell order, set [`role="grid"`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/grid_role). If the rows of the `grid` can be expanded and collapsed, use [`role="treegrid"`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/treegrid_role) instead.

Off to a good start with something I didn't know! 

> Rows contain table header (`<th>`) and table data (`<td>`) cells which, in turn, contain all the data. In the DOM, before any of this, you may find two additional features: the table caption (`<caption>`) and column groups (`<colgroup>`). Depending on whether or not the `<colgroup>` has a `span` attribute, it may contain nested table column (`<col>`) elements.

I always wondered about `<colgroup>`, there's more information later in the lesson and I can't wait to learn about it.

### Table caption

Go to this [section at Learn HTML](https://web.dev/learn/html/tables/#table_caption).

> The `<caption>` element should be the first element nested in the `<table>` element. Including it lets all users know the purpose of the table immediately without having to read the surrounding text. Alternatively, you can use `aria-label` or `aria-labelledby` on the `<table>` to provide an accessible name as the caption. The `<caption>` element has no element-specific attributes.

Good tip that using `aria-label` or `aria-labeledby` instead of `<caption>` is an option. More good tips on the various ways to handle captions and descriptions in general...

> Preferably, data tables should have clear headers and a caption, and be simple enough to be almost self-explanatory. Bear in mind that not all users have the same cognitive abilities. When the table is "making a point", or otherwise needs interpretation, provide a brief summary of the main point or function of the table. Where that summary is placed depends on its length and complexity. If brief, use it as the inner text of the caption. If longer, summarize it in the caption, and provide the summary in the paragraph preceding the table, associating the two with the [`aria-describedby`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute. Putting the table in a `<figure>` and putting the summary in the `<figcaption>` is another option.

Note to my fellow Eleventy users, [markdown-it,](https://www.11ty.dev/docs/languages/markdown/) which includes the ability to create tables in markdown, doesn't provide captions by default, or if it does, I couldn't figure it out. I found the [markdown-it-table-caption](https://github.com/martinring/markdown-it-table-captions) plugin that adds the ability to use captions and will try it out. If it works I'm adding this to my Hot HTML Summer to-do list.

### Table content

Go to this [section at Learn HTML](https://web.dev/learn/html/tables/#table_content).

> There were attributes to add padding between cells and within cells, for borders, and for text alignment. Cellpadding and cellspacing, which define the space between the content of a cell and its border, and between the borders of adjacent cells, should be set with the CSS [border-collapse](https://developer.mozilla.org/docs/Web/CSS/border-collapse) and [border-spacing](https://developer.mozilla.org/docs/Web/CSS/border-spacing) properties, respectively.

Forgot about those attributes! Perhaps more like burned them from my layout table memory, never to be spoken of again.

> `Border-spacing` will have no effect if `border-collapse: collapse` is set. If `border-collapse: separate;` is set, it's possible to hide empty cells completely with `empty-cells: hide;`.

I didn't know about `empty-cells: hide;`, could be useful.

> The `<th>` cell has semantic meaning, with implicit ARIA roles of [columnheader](https://w3c.github.io/aria/#columnheader) or [rowheader](https://w3c.github.io/aria/#rowheader). It defines the cell as the header for the column or row of table cells, depending on the value of the enumerated `scope` attribute. The browser will default to `col` or `row` if `scope` is not explicitly set.

I always forget that rows can have headers too. There's an example CodePen in the section that has a nice illustration of the approach of using both column and row headers.

### Merging cells

Go to this [section at Learn HTML](https://web.dev/learn/html/tables/#merging_cells).

> In cases where a cell is defined by multiple header cells with associations that cannot be set by the `scope` attributes alone, include the `headers` attribute with a space-separated list of the associated headers. As this example is a more complex table, we explicitly define the scope of the headers with the `scope` attribute. To be even clearer, we added the `headers` attribute to each cell. [...] In such complex tables, explicitly associate each data cell with each corresponding header cell with a list of space-separated `id` values of all the associated headers as the value of the `headers` attribute.

There are aspects of tables that I've heard of and don't know much about, but I've never even heard of the `headers` attribute for tables. The example CodePen in this section, and the additional detail, are definitely worth checking out.

## Styling tables

Go to this [section at Learn HTML](https://web.dev/learn/html/tables/#styling_tables).

> There are two relatively obscure elements that were briefly mentioned: the column group, [`<colgroup>`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup), element and its only descendant, the empty [`<col>`](https://developer.mozilla.org/docs/Web/HTML/Element/col) column element. The `<colgroup>` element is used to define groups of columns, or `<col>` elements, within a table.

Speaking of things I've heard of, but don't know too much about.

> Neither `<colgroup>` nor `<col>` has semantic meaning in terms of helping to make the table more accessible, but they do allow for limited column styling, including setting a width for the column with CSS.

Ah ha! There's an example of how and where to add `<colgroup>` within your table code, but no CodePen illustrating its usage. So [I created one](https://codepen.io/superterrific/pen/LYXzKEL?editors=1100) to try it out, and in the process I discovered the limited part of limited column styling. 

My first attempt included `background` and `color` properties for the column, but only `background` worked. The [MDN `colgroup` page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup) and the [WHATWG spec](https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element) didn't have any information, but the [Table Basics page at MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics#providing_common_styling_to_columns) did...

> **Note:** Styling columns like this is [limited to a few properties](https://www.w3.org/TR/CSS22/tables.html#columns): [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border), [`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background), [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width), and [`visibility`](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility). To set other properties you'll have to either style every `<td>` or `<th>` in the column, or use a complex selector such as [`:nth-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child).

The MDN Table Basics page also links [to the W3 CSS spec](https://www.w3.org/TR/CSS22/tables.html#columns), which has the information about the limited properties, and additional information about how the `visibility` property has limited values...

> If the 'visibility' of a column is set to 'collapse', none of the cells in the column are rendered, and cells that span into other columns are clipped. In addition, the width of the table is diminished by the width the column would have taken up. Other values for 'visibility' have no effect.

Only `visibility: collapse;` works for `colgroup`. According to the [MDN CSS > visibility page](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility#values), the bonus of using `collapse` is that it removes the columns (or rows, or cells, depending on how you use it) without forcing the recalculation of the widths or heights for the entire table. 

> For [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) rows, columns, column groups, and row groups, the row(s) or column(s) are hidden and the space they would have occupied is removed (as if `display: none` were applied to the column/row of the table). However, the size of other rows and columns is still calculated as though the cells in the collapsed row(s) or column(s) are present. This value allows for the fast removal of a row or column from a table without forcing the recalculation of widths and heights for the entire table.

There's additional information in the [dynamic row and column effects](https://www.w3.org/TR/CSS22/tables.html#dynamic-effects) in the CSS spec.

But there you have it, the `colgroup` is a mystery no more. One thing to keep in mind about accessibility, if you do use `<colgroup>` be sure to set a background color that has enough contrast with the existing text color as you aren't able to change the text color (via the `color` property) with `<colgroup>`.

## Presenting data

Go to [section at Learn HTML](https://web.dev/learn/html/tables/#presenting_data).

> If you want to lay out content in many columns, use [multi-column layout](https://developer.mozilla.org/docs/Web/CSS/CSS_Columns).

A what? `column-count`? Somehow I missed this option. I threw together [a quick CodePen](https://codepen.io/superterrific/pen/oNQoxvN) to test it out, and found this [helpful article from Rachel Andrew.](https://www.smashingmagazine.com/2019/01/css-multiple-column-layout-multicol/) I'm only learning about HTML right now, I'll have to come back to this. 
