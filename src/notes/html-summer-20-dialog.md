---
title: "Hot HTML Summer: Dialog"
summary: "Winding down with a dialog."
date: 2023-07-31T13:00:00Z
htmlSection: "Dialog"
htmlLink: "https://web.dev/learn/html/dialog/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{% include "text/html-summer-series.html" %}{% endcaption %}

{% include "text/html-summer-module.html" %}

## Intro section

There’s no anchor for this section, it’s the first part of the module.

> Dialogs can be either modal (only the content in the dialog can be interacted with) or non-modal (it's still possible to interact with content outside of the dialog).

Learning new things right out of the gate.

## Modal dialogs

Go to this [section at Learn HTML](https://web.dev/learn/html/dialog/#modal_dialogs).

> Once opened, there are three ways to close the dialog: the escape key, submitting a form with a button that has the [`formmethod="dialog"`](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formmethod) set (or if the form itself has `method="dialog"` set), and the [`HTMLDialogElement.close()`](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close) method.

This is in reference to [an example CodePen](https://codepen.io/web-dot-dev/pen/BaOBLNy). Good to know the different ways to handle closing the modal.

> When the dialog is opened, focus moves into the dialog. Focus is set on the first element in the sequential keyboard navigation order within that dialog.

I [learned about this](/notes/hot-html-summer-focus/#the-autofocus-attribute) a few lessions ago in the focus module. Manuel Matuzović also has a [recent post](https://www.matuzo.at/blog/2023/focus-dialog/) testing various content combinations across browsers that provides more detail.

## Non-modal dialogs

Go to this [section at Learn HTML](https://web.dev/learn/html/dialog/#non_modal_dialogs).

> The `HTMLDialogElement.show()` similarly opens a dialog, but without adding a backdrop or causing anything to become inert. The escape key does not close non-modal dialogs. Because of this, it is even more important to ensure you include a method of closing the non-modal dialog. In doing so, if the closer is outside the dialog, realize the focus will go to the element that opened the dialog, which may not be the best user experience.

Woof, yeah. The heading in the non-modal dialog [in this example](https://codepen.io/estelle/pen/bGKQvza) is appropriately titled Bad User Experience.

## Closing a dialog

Go to this [section at Learn HTML](https://web.dev/learn/html/dialog/#closing_a_dialog).

> You don’t need the `HTMLDialogElement.close()` method to close a dialog. You don’t need JavaScript at all. To close the `<dialog>` without JavaScript, include a form with a dialog method by either setting `method="dialog"` on the `<form>` or `formmethod="dialog"` on the button.

When I first saw that `<dialog>` was available I [ran to CodePen to try it out](https://codepen.io/superterrific/pen/JjMJqPR). I can't remember where I read it so I don't know where the code example came from, but it used Javascript to both open and close the dialog via onclick on the button element (`window.dialog.showModal()` and `window.dialog.close()`). Upon reading the above passage I ran back to [CodePen and created a new example](https://codepen.io/superterrific/pen/qBQyLxd?editors=1100) setting `formmethod="dialog"` on the buttons (one "X" close in the upper right and one text labeled close below the text).

Out of habit I added `:focus-visible` to the `button` elements instead of `:focus`, this may not visually indicate focus on the first interactive element in your dialog even though it will still receive focus. The same goes for explicitly setting autofocus, the focus will be set but may not visually indicated. 

As [Hidde de Vries explains](https://hidde.blog/focus-visible-more-than-keyboard/), when using `:focus-visible` the browser decides if it's best to indicate focus based on a number of different heuristics. As an example, in Chrome if the dialog was opened via keyboard the focus was indicated. If the dialog was opened via mouse the focus was not indicated. This was a simplistic test, but best to use good old `:focus` for this one to ensure proper indication.

Also of note, you currently still need JavaScript to open the dialog via the showModal() method. Although there has been [active discussion](https://github.com/whatwg/html/issues/3567) about the adding the ability to open without JavaScript at the repository for the HTML spec that started in 2018.


