---
title: "Hot HTML Summer: Forms"
summary: "Forms in good form."
date: 2023-07-12T13:00:00Z
htmlSection: "Forms"
htmlLink: "https://web.dev/learn/html/forms/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{{ blurbs.htmlSummer | safe }}{% endcaption %}

{% include "text/html-summer-blurb.html" %}

## Submitting forms

Go to this [section at Learn HTML](https://web.dev/learn/html/forms/#submitting-forms).

> The attributes of the `<form>` element set the [HTTP method](https://web.dev/learn/forms/form-element/#how-is-the-data-transferred) by which the form is submitted and the URL that processes the form submission. Yes, forms can be submitted, processed, and a new page can be loaded without any JavaScript. The [`<form>` element](https://web.dev/learn/forms/form/) is that powerful.

My work with forms has been focused on styling, layout, and accessibility. Handing off my design in code means that the fullstack developers ~~don't mess up the layout or not associate the labels correctly~~ only have to focus on integrating the form, including submission and validations. tl;dr I will be learning a lot in this module of the course! 

> The data sent is made up of name/value pairs of the form's various form controls. By default, this includes all the form controls nested within the form that have a `name`. However, with the `form` attribute, it is possible to include form controls outside the `<form>` and to omit form controls nested within the `<form>`. Supported on form controls and `<fieldset>`, the `form` attribute takes as its value the `id` of the form the control it is associated with, not necessarily the form it is nested in. This means form controls don't need to be physically nested in a `<form>`.

The `name` attribute I knew, but not the `form` attribute. Very helpful to know that a form element could be anywhere in the document and be included in the form submission.

> Form buttons can have more than the attributes described at the start of this section. If the button includes a `formaction`, `formenctype`, `formmethod`, `formnovalidate`, or `formtarget` attribute, the values set on the button activating the form submission take precedence over the `action`, [`enctype`](https://web.dev/learn/forms/form/#enable-users-to-submit-files), `method`, and [`target`](https://web.dev/learn/html/attributes/) set on the `<form>`. Constraint validation occurs prior to form submission, but only if there is neither a `formnovalidate` on the activated submit button nor a `novalidate` on the `<form>`.

I knew none of this and have not heard of any of those attributes. If I ever strike out on my own and need to actually submit forms I will head directly to the[ Learn Forms course](https://web.dev/learn/forms/).

## After submitting the form

Go to this [section of Learn HTML](https://web.dev/learn/html/forms/#after-submitting-the-form).

> The value of a `<textarea>` is its inner text. The value of a `<select>` is the selected `<option>`'s `value` or, if the `<option>` doesn't include a `value` attribute, the value is the selected option's inner text.

Good to know. There's an example illustrating the `<select>` behavior.

> There are [22 input types](https://developer.mozilla.org/docs/Web/HTML/Element/Input#input_types), so we can't cover them all. Just note that including a value is optional, and often a bad idea, when you want the user to enter information. For `<input>` elements where the user can't edit the value, you should always include a value, including for input elements with a type of `hidden`, `radio`, `checkbox`, `submit`, `button`, and `reset`.

More useful information.

## Radio buttons

Go to this [section at Learn HTML](https://web.dev/learn/html/forms/#radio-buttons).

> If the user is required to pick a radio control from a group of radio buttons, add the [`required`](https://developer.mozilla.org/docs/Web/HTML/Attributes/required) attribute to at least one of the controls. Including `required` on a radio button in a group makes a selection required for form submission, but it doesn't have to be the radio with the attribute that gets selected to be valid.

Another note for my future form submitting self.

## Checkboxes

Go to this [section at Learn HTML](https://web.dev/learn/html/forms/#checkboxes).

> If you don't include a `value` on a checkbox, the value of the selected checkboxes will default to `on`, which probably isn't helpful.

Agree.

## Labels and fieldsets

Go to this [section of Learn HTML](https://web.dev/learn/html/forms/#labels-and-fieldsets).

> Associating labels with form controls has several benefits. Labels make form controls accessible to screen reader users by providing the control with an accessible name. Labels are also "hit areas"; they make the site more usable for users with dexterity issues by increasing the area.

Happy to report I didn't find anything I didn't already know in this section. I wanted to highlight it because incorrectly associating labels to form controls is by far the most frequent mistake I've seen in teams I've worked with, and it has a big impact on accessibility.

## Built-in validation

Go to this [section at Learn HTML](https://web.dev/learn/html/forms/#built-in-validation).

> Using the `maxlength` attribute can lead to a poor user experience. It's generally a better experience to allow the user to enter more than the allowed character length providing a counter, optionally in the form of an [`<output>`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element, which is not submitted with the form, enabling them to edit down the text until the output shows the maximum allowed length has not been exceeded.

Another good usability tip. Similarly in regard to `minlength` [in the Other considerations section](https://web.dev/learn/html/forms/#other-considerations)...

> ...it is important to consider that not everyone is like you. Someone may have a single letter as a last name (or no last name at all)

In some cases you might be constrained by a minimum character requirement in a database that's not immediately in your control, but if that's not a constraint it's important to keep in mind how you could impact users by setting arbitrary minimums or constraining characters with `pattern`. If you're willing to traverse Twitter, the [Your Name Is Invalid! account ](https://twitter.com/yournameisvalid) is worth a look as an example of the many ways arbitrary constraint validations can make forms unusable.

I could easily share many more useful insights from the [Built-in validation](https://web.dev/learn/html/forms/#built-in-validation), [Example](https://web.dev/learn/html/forms/#example), and [Other considerations](https://web.dev/learn/html/forms/#other-considerations) sections. But you should just go read it for yourself.








