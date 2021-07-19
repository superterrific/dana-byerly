---
title: 'Do New York City mayoral candidates have accessible campaign sites?'
summary: 'Nine candidates, ten review criteria, how did they fare?'
date: 2021-06-14
category: 'Articles'
tags: ['Accessibility']
---
A few weeks ago I was watching the first Democratic primary debate for New York City mayor. There are nine candidates! I only knew of a few of them so I started visiting their sites to learn more.

Rather than learning more about their platforms, I was struck by the amount of notable accessibility issues. Suddenly I was opening DevTools to check color contrast ratios and tabbing around looking for focus indication. Before too long I created a spreadsheet to track what I was finding, and the findings were not good.

According to the Web Accessibility Initiative (WAI) [web accessibility is defined](https://www.w3.org/WAI/fundamentals/accessibility-intro/) as "websites, tools, and technologies that are designed and developed so that people with disabilities can use them". The [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) provide detailed information to help ensure that what we build on the web can be used by everyone.  

Since it's unlikely that [either of the Republican candidates](https://twitter.com/patkiernan/status/1397700475743571969) will win, one of these nine will become the next Mayor of New York City. What does the lack of accessibility in their campaign sites say about their commitment to accessibility for the citizens of New York City? Or their commitment to an equitable and inclusive New York City?

Also of note, nine candidates hired nine teams to create their sites and not one of them created a fully accessible site. As much as this an unfortunate statement about the candidates, it also highlights that creating digital experiences that work for everyone is not even close to being the norm.


## Caveats
First and foremost, I am **not an accessibility expert** and this is **not a proper accessibility audit!** I'm a designer, developer, accessibility advocate and a citizen of New York City.

* This is a high-level look at the basics only, For example I looked at heading levels but not the overall structure and semantics of the page.
* The candidates could address every issue I found and their site could still not be accessible! Although any fixes would improve accessibility, which is always a good thing.
* This is not a design review or critique.
* The [What's being reviewed section](#whats-being-reviewed) goes into detail about what is reviewed, but here's what is **not** reviewed:
	* Aria usage.
	* Page structure and semantics beyond heading levels.
	* Contrast on hover states.
	* Text links visually indicated by something other than color (e.g., underline, with an icon).
	* Meaningful text in ```alt``` tags, although it is mentioned in a few places.
	* Whether sites using motion respect user settings.
	* Whether a site had dark mode and respected user settings.

## Method
* I only reviewed the homepage of each site.
* I used a combination of manual checking, [ARC Toolkit plugin](https://www.tpgi.com/arc-platform/arc-toolkit/), [WAVE](https://wave.webaim.org/), [W3C HTML Validator](https://validator.w3.org/) and [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/).
* I only tested on desktop primarily using Chrome, Safari and Firefox (my browser of choice).
	 * Did not review on mobile.
	 * Did not review with a screen reader or any other assistive technology.


## What's being reviewed
I chose 10 items to review for each of the candidate's sites. In the course of writing this post a few of the sites have made updates and one site was completely redesigned. The last in-depth reviews were done over the last weekend in May with spot checks done in the days leading up to publishing this post.

I've included a candidate scorecard in each review section as well as a section for [each candidate](#results-by-candidate) that includes their full results with more detail about each review.

Explanations in the review criteria are not inclusive of all the ways in which visitors may use the sites, and are meant to give some examples to illustrate the importance of the standards.

> "As a general rule, keep in mind that you can’t predict all the ways your visitors choose to browse the web." &mdash; [Hidde DeVries](https://hiddedevries.nl/en/blog/2019-06-06-indicating-focus-to-improve-accessibility)


### Is there a "Skip Link"?
A "Skip Link" allows people using keyboards, screen readers or other assistive input devices a way to bypass a site's navigation and skip to the main content. A sighted person using a mouse can easily scroll to a site's main content, but keyboards, screen readers and other assistive devices traverse the page sequentially using [focusable elements](https://developers.google.com/web/fundamentals/accessibility/focus/) such as links, form fields and buttons. Providing a "Skip Link" ensures that everyone can easily navigate through your site.

To test for a "Skip Link" press the tab key after the page has loaded, if a "Skip Link" is present it will typically appear in the upper left corner or centered at the top of the screen.

{% figure %}
  <picture>
    <source srcset="/img/skip-links.avif" type="image/avif">
    <source srcset="/img/skip-links.webp" type="image/webp">
    <img src="/img/skip-links.png" alt="Examples of Skip Links from several of the candidate's sites." loading="lazy" />
  </picture>
  {% figcaption %}
    Examples of Skip Links from some of the candidate's sites: Dianne Morales (top left), Kathryn Garcia (top right), Ray McGuire (bottom left) and Shaun Donovan (bottom right).
  {% endfigcaption %}
{% endfigure %}

#### Skip Link review results
Candidates passed: 4 out of 9

| Candidate | Outcome |
| --- | --- |
| Andrew Yang | Fail |
| Dianne Morales | **Pass** |
| Eric Adams | Fail |
| Kathryn Garcia | **Pass** |
| Maya Wiley | Fail |
| Ray McGuire | **Pass** |
| Scott Stringer | Fail |
| Shaun Donovan | **Pass** |


#### Learn more about Skip Links
* [WebAIM: Skip Navigation Links](https://webaim.org/techniques/skipnav/)
* [Digital A11y: Understanding SC 2.4.1 Bypass Blocks](https://www.digitala11y.com/understanding-sc-2-4-1-bypass-blocks/)
* [TetraLogical YouTube: Quick Accessibility Test - Skip Link](https://www.youtube.com/watch?v=kVXVeq6TMJk)
* [CSS Tricks: How to Create a "Skip to Content" Link](https://css-tricks.com/how-to-create-a-skip-to-content-link/)

---

### Keyboard only navigation
Dexterity issues or motor impairment are a few of the reasons someone may use a keyboard, [switch](https://axesslab.com/switches/) or other type of assistive input device to interact with your site.

Unlike using a mouse, a person using a keyboard or other device has to navigate sequentially through the site, tabbing through links and other [focusable elements](https://developers.google.com/web/fundamentals/accessibility/focus/).

To test the candidate's sites I used the tab key to see if I could make it all the way through their homepage in a logical order with the ability to interact with all of their content.

#### Keyboard navigation review results
Candidates passed: 4 out of 9

| Candidate | Outcome |
| --- | --- |
| Andrew Yang | **Pass** |
| Dianne Morales | Fail |
| Eric Adams | **Pass** |
| Kathryn Garcia | Fail |
| Maya Wiley | **Pass** |
| Ray McGuire | **Pass** |
| Scott Stringer | Fail |
| Shaun Donovan | Fail |


#### Learn more about keyboard navigation
* [TetraLogical YouTube: Quick Accessibility Test - Keyboard Support](https://www.youtube.com/watch?v=ahDuaWKSGZA)
* [Nielson Norman Group: Keyboard-only Navigation for Improved Accessibility](https://www.nngroup.com/articles/keyboard-accessibility/)
* [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
* [W3C: Understanding Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html)

---

### Visible focus indication
Visible focus indication goes hand in hand with keyboard and [switch](https://axesslab.com/switches/) usage. Tabbing through a site with a keyboard navigates the page by sequentially moving through each element that can receive input. When the element is selected it is said to have "focus".

Links, form fields and buttons are examples of elements that can receive input, also referred to as [focusable elements](https://developers.google.com/web/fundamentals/accessibility/focus/). It's crucial to visibly indicate that an element has focus to allow sighted visitors to quickly orient their location on the page.

 [Web Content Accessibility Guidelines (WCAG) AA standards](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum.html) requires focused elements to have a 3:1 color contrast ratio between the element and its background.

 While tabbing through the candidate's sites to check keyboard navigation I also checked for visible focus indication. If there was visible focus on some, but not all focusable elements it was counted as a fail. It was also counted as a fail if the visible focus did not meet the [3:1 color contrast ratio](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum.html).

 {% figure %}
	 <picture>
		 <source srcset="/img/focus-indication.avif" type="image/avif">
		 <source srcset="/img/focus-indication.webp" type="image/webp">
		 <img src="/img/focus-indication.png" alt="Examples of focus indication from several of the candidate's sites." loading="lazy" />
	 </picture>
	 {% figcaption %}
		 Examples of focus indication from some of the candidate's sites: Ray McGuire (top left), Eric Adams (top right), Maya Wiley (bottom left) and Dianne Morales (bottom right).
	 {% endfigcaption %}
 {% endfigure %}

 #### Focus indication review results
Candidates passed: 0 out of 9

| Candidate | Outcome |
| --- | --- |
| Andrew Yang | Fail |
| Dianne Morales | Fail |
| Eric Adams | Fail |
| Kathryn Garcia | Fail |
| Maya Wiley | Fail |
| Ray McGuire | Fail |
| Scott Stringer | Fail |
| Shaun Donovan | Fail |

#### Learn more about focus indication
* [Google Accessibility Guide: What is Focus?](https://developers.google.com/web/fundamentals/accessibility/focus/)
* [W3C: Understanding Success Criteria 2.4.11: Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum.html)
* [Deque: How to Design Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
* [Hidde Devries: Indicating Focus to Improve Accessibility](https://hiddedevries.nl/en/blog/2019-06-06-indicating-focus-to-improve-accessibility)

---

### Color contrast
Sufficient color contrast between content and the background ensures that low vision and colorblind visitors are able read and interact with your content. It's also helpful for all sighted visitors in conditions with low light or screen glare.

The Web Content Accessibility Guidelines (WCAG) has set minimum contrast ratios for [text](https://webaim.org/articles/contrast/#sc143) and [non-text elements](https://webaim.org/articles/contrast/#sc1411) such as buttons, form fields and icons.

Text on background images can make meeting and testing color contrast tricky, and many of the candidates have text over background images. I used a mix of tools and manual spot testing when reviewing the candidates sites.

{% figure %}
	<picture>
		<source srcset="/img/color-contrast.avif" type="image/avif">
		<source srcset="/img/color-contrast.webp" type="image/webp">
		<img src="/img/color-contrast.png" alt="Examples of good color contrast from several of the candidate's sites." loading="lazy" />
	</picture>
	{% figcaption %}
		Examples of good color contrast from some of the candidate's sites: Maya Wiley (top left), Andrew Yang (top right), Kathryn Garcia (bottom left) and Eric Adams (bottom right).
	{% endfigcaption %}
{% endfigure %}

#### Color Contrast review results
Candidates passed: 0 out of 9

| Candidate | Outcome |
| --- | --- |
| Andrew Yang | Fail |
| Dianne Morales | Fail |
| Eric Adams | Fail	 |
| Kathryn Garcia | Fail |
| Maya Wiley | Fail |
| Ray McGuire | Fail |
| Scott Stringer | Fail |
| Shaun Donovan | Fail |

#### Learn more about color contrast
* [WebAIM: Contrast and Color Accessibility](https://webaim.org/articles/contrast/)
* [W3C: Understanding Success Criterion 1.4.3: Contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
* [Digital A11y: # Understanding SC 1.4.11 Non-text Contrast](https://www.digitala11y.com/understanding-sc-1-4-11-non-text-contrast/)
* [Who Can Use: Color Contrast Checker](https://whocanuse.com)
* [The A11y Project: Fixing contrast issues, on your own site and elsewhere](https://www.a11yproject.com/posts/2021-06-07-fixing-contrast-issues-on-your-own-site-and-elsewhere/)

---

### Correct heading level outline
Heading levels refer to the [HTML heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) of `h1` - `h6`. Correctly ordered heading levels [have a number of benefits](https://usability.yale.edu/web-accessibility/articles/headings#benefits), including allowing screen reader users to listen to a list of all headings and skip to any one of them to begin reading.

A common mistake with headings is using them to apply font size. This approach typically results in non-sequential or missing headings. Several of the candidate's sites did not have a `h1` or skipped levels.

I included heading level outline in each candidate's W3C HTML Validator test, it's also included in their WAVE test. I've linked to the results of each in the candidate's individual results.

{% figure %}
	<picture>
		<source srcset="/img/heading-levels.avif" type="image/avif">
		<source srcset="/img/heading-levels.webp" type="image/webp">
		<img src="/img/heading-levels.png" alt="Examples of levels from Ray McGuire and Scott Stringer's sites." loading="lazy" />
	</picture>
	{% figcaption %}
		Examples of correct and incorrect heading levels. Ray McGuire's heading levels (left) are correct and Scott Stringer's heading levels (right) are not in correct sequential order.
	{% endfigcaption %}
{% endfigure %}

#### Heading levels review results
Candidates passed: 2 out of 9

| Candidate | Outcome |
| --- | --- |
| Andrew Yang | Fail	 |
| Dianne Morales | Fail |
| Eric Adams | Fail |
| Kathryn Garcia | Fail |
| Maya Wiley | **Pass** |
| Ray McGuire | **Pass** |
| Scott Stringer | Fail |
| Shaun Donovan | Fail |

#### Learn more about heading levels
* [W3C: Web Accessibility Tutorial - Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
* [WebAim: Headings](https://webaim.org/techniques/semanticstructure/#headings)

---

### Alternative text for images
Alternative text, or alt text, is used to provide context about images. Alt text should be provided for images that convey information, but the alt tag can be left blank for purely decorative images (e.g., ```alt=""```). If you're not sure if an image is purely decorative or not, Caitlin Geier at the [Deque blog](https://www.deque.com/blog/great-alt-text-introduction/) suggests removing it from the design to see if any meaning or information is lost. If so, add alt text to ensure that screen reader users also get that information.

Another important use for alt text is that it renders the text on the screen if the image doesn't load. This is helpful for people on slower connections and where visitors have turned off images to cut down on cognitive load or page load time.

Alt text testing is included in WAVE and I included it in the W3C HTML Validator test. Automated tests only pick up whether or not the alt tag is present and whether it has text or is left blank. It can't tell if an image is decorative but in some cases can flag that text might not be meaningful. In addition to WAVE and the HTML validator I also did manual spot checks.

#### Alternative text review results
Candidates passed: 4 out of 9

| Candidate | Outcome |
| --- | --- |
| Andrew Yang | Fail |
| Dianne Morales | **Pass** |
| Eric Adams | Fail |
| Kathryn Garcia | **Pass** |
| Maya Wiley | Fail |
| Ray McGuire | Fail |
| Scott Stringer | **Pass** |
| Shaun Donovan | **Pass** |

#### Learn more about alt text
* [W3C: An 'alt' Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
* [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
* [Deque: # How to Design Great Alt Text: An Introduction](https://www.deque.com/blog/great-alt-text-introduction/)

---

### Proper use of labels in forms
Form inputs need a properly associated label in order to be accessible to assistive technologies. Another benefit is that clicking or tapping on the label puts the input in focus, which makes it easier for people with motor disabilities to select and enter information in a form.

It's not uncommon to see placeholder text used in place of labels, or labels that are not properly associated to their inputs. I tested this using WAVE, the ARC Toolkit plugin and manually. I only tested to see if inputs had proper labels, not if the [labels were meaningful](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships).

#### Form label review results
Candidates passed: 2 out of 9

| Candidate | Outcome |
| --- | --- |
| Andrew Yang | Fail |
| Dianne Morales | Fail |
| Eric Adams | Fail |
| Kathryn Garcia | Fail |
| Maya Wiley | Fail |
| Ray McGuire | **Pass** |
| Scott Stringer | **Pass** |
| Shaun Donovan | Fail |


#### Learn more about form input and label usage
* [Deque University: Form Input, Labels, and Instructions](https://dequeuniversity.com/checklists/web/form-input-labels-instructions)
* [WebAIM: Creating accessible forms](https://webaim.org/techniques/forms/controls)
* [W3C: Web Accessibility Tutorials: Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/)

---

### Content resizing
People with low vision view content on their computers and [phones](https://twitter.com/labdisability/status/1094538033603534848) by magnifying or zooming the screen. When the screen is magnified or zoomed the content reflows. The [success criteria for content reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) is for content to be "presented without loss of information or functionality, and without requiring scrolling in two dimensions".

This is important to ensure that visitors to your site don't have to scroll horizontally when viewing magnified content. I zoomed each of the candidate's sites to 400% to see if they were still usable.

{% figure %}
	<picture>
		<source srcset="/img/content-resizing.avif" type="image/avif">
		<source srcset="/img/content-resizing.webp" type="image/webp">
		<img src="/img/content-resizing.png" alt="Examples of content reflow from several of the candidate's sites." loading="lazy" />
	</picture>
	{% figcaption %}
		Examples of both good and bad content reflow. The two examples on the top show content that is legible and the examples on the bottom show content and form issues. Dianne Morales (top left), Ray McGuire (top right), Maya Wiley (bottom left) and Shaun Donovan (bottom right).
	{% endfigcaption %}
{% endfigure %}

#### Content resizing review results
Candidates passed: 1 out of 9

| Candidate | Outcome |
| --- | --- |
| Andrew Yang | Fail |
| Dianne Morales | Fail |
| Eric Adams | Fail |
| Kathryn Garcia | Fail |
| Maya Wiley | Fail |
| Ray McGuire | **Pass** |
| Scott Stringer | Fail |
| Shaun Donovan | Fail |


#### Learn more about content resizing
* [TetraLogical YouTube: Quick accessibility test: Content resizing](https://www.youtube.com/watch?v=KzV-BjoXjHo)
* [YouTube: Two ways blind/low vision people use smart phones](https://www.youtube.com/watch?v=-65ON_ctnp0)
* [YouTube: How a blind/visually impaired person uses a phone](https://www.youtube.com/watch?v=atTI45j-Pjo)
* [CSS Tricks: Accessible Font Sizing, Explained](https://css-tricks.com/accessible-font-sizing-explained/)

---

### Accessibility Statement
An Accessibility Statement is a dedicated, clearly labeled page of a website that spells out the site owner's commitment to the site's accessibility. The intended audience should be all visitors to the site.

While there are no hard and fast rules about what's included, the site's current level of conformance and a way to provide feedback are considered the essentials as demonstrated by the [Minimal Example at the W3C site](https://www.w3.org/WAI/planning/statements/minimal-example/).

Investis Digital points out an important consideration when writing an Accessibility Statement...

> Remember that although having an accessibility statement is, in some cases, a legal requirement, it shouldn’t read like a legal document. Its target audience is your users. Avoid using technical or legal jargon, and make sure the content is written in a simple and easy to understand language. &mdash; [Investis Digigal](https://www.investisdigital.com/blog/web-design-and-development/writing-accessibility-statement)


#### Accessibility Statement review results
Candidates passed: 1 out of 9

| Candidate | Outcome |
| --- | --- |
| Andrew Yang | Fail |
| Dianne Morales | Fail |
| Eric Adams | Fail |
| Kathryn Garcia | Fail |
| Maya Wiley | **Pass** |
| Ray McGuire | Fail |
| Scott Stringer | Fail |
| Shaun Donovan | Fail |


#### Learn more about accessibility statements
* [Nomensa: How to write an Accessibility Statement](https://www.nomensa.com/blog/writing-an-accessibility-statement)
* [Investis Digital: Writing an Accessibility Statement](https://www.investisdigital.com/blog/web-design-and-development/writing-accessibility-statement)
* [W3C: Developing an Accessibility Statement](https://www.w3.org/WAI/planning/statements/)

---

### Usable without JavaScript
There is no direct accessibility standard for the availability of JavaScript, but if all or some of your site depends on JavaScript to function it could cause issues if JavaScript doesn't load. And if you consider the goal of accessibility to ensure that everyone can use your site, then this is an accessibility issue.

> All your users are non-JS while they’re downloading your JS. &mdash; [Jake Archibald](https://www.smashingmagazine.com/2018/05/using-the-web-with-javascript-turned-off/)

There are a number of [reasons why JavaScript might not load](https://adamsilver.io/blog/javascript-isnt-always-available-and-its-not-the-users-fault/). Some browsers [turn off JavaScript on slow connections](https://adamsilver.io/blog/javascript-isnt-always-available-and-its-not-the-users-fault/#3.-some-browsers-turn-off-javascript-on-slow-connections), or an [extension can break JavaScript](https://adamsilver.io/blog/javascript-isnt-always-available-and-its-not-the-users-fault/#2.-browser-extensions-can-break-javascript). And of course a visitor to your site may have it turned off by choice.

Considering these are content sites rather than transactional, it's reasonable to assume they should be fully usable without JavaScript. While looking at candidate's sites I found examples of backgrounds not loading, which led to contrast issues, and instances where the navigation was no longer accessible via keyboard. In most of the "fails" the forms didn't load.

I disabled JavaScript and tried to view the candidate's sites, if any element of the page didn't load I counted it as a fail. In some case much of the site didn't load and in others it was forms and/or images.



#### Usable without JavaScript review results
Candidates passed: 0 out of 9

| Candidate | Outcome |
| --- | --- |
| Andrew Yang | Fail |
| Dianne Morales | Fail |
| Eric Adams | Fail |
| Kathryn Garcia | Fail |
| Maya Wiley | Fail |
| Ray McGuire | Fail |
| Scott Stringer | Fail |
| Shaun Donovan | Fail |

#### Learn more about making sites usable without JavaScript
* [Adam Silver: JavaScript isn't always available and it's not the user's fault](https://adamsilver.io/blog/javascript-isnt-always-available-and-its-not-the-users-fault/)
* [Dev: Why your website should work without JavaScript](https://dev.to/shadowfaxrodeo/why-your-website-should-work-without-javascript-3kko)

---

### Links to tests and validator results
I used a few tools to help test the candidate's sites. The following allow for direct links to test results and have been included in the candidate's individual section.

[WAVE](https://wave.webaim.org/) is a free web accessibility evaluation tool created by 	[WebAim](https://webaim.org/). When testing via the WAVE site the results are available by copying the URL of the results report. It's also available as a [Chrome or Firefox](https://wave.webaim.org/extension) extension.

The [W3C HTML Validator](https://validator.w3.org/) is a free markup validation service. All the candidates site's had an eye-opening amount of errors. I've included the document outline, which shows the [heading levels](#correct-heading-level-outline) and a report on images, which is relevant to [alternative text](#alternative-text-for-images).

[Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/) is a free performance evaluation tool from Google that includes results for [Core Web Vitals](https://web.dev/vitals/). Like [JavaScript availability](#usable-without-javascript) there is no direct accessibility standard around performance, but visitors on slow connections with lower end devices may have a [harder time using your site](https://css-tricks.com/accessibility-and-web-performance-are-not-features-theyre-the-baseline/) if the performance is poor. While I didn't use it in these evaluations, [WebPageTest](https://www.webpagetest.org/) is another useful performance evaluation tool.

---

## Results by candidate
The full results for each candidate includes a link to their site, what platform they're using, their overall score, a summary, a few example images, details for each review and links to their automated test results. The candidates are ordered alphabetically by first name.

### Andrew Yang
[Yang for New York](https://www.yangforny.com/)  
Platform: Gatsby  
Reviews passed: 1 out of 10

While Yang's site is navigable by keyboard, the carousel behavior is not consistent, which could lead to confusion. Overall the had a wide variety of issues including no "Skip Link" many color contrast issues and inconsistent use of focus indication.

{% figure %}
	<picture>
		<source srcset="/img/yang.avif" type="image/avif">
		<source srcset="/img/yang.webp" type="image/webp">
		<img src="/img/yang.png" alt="An example of poor contrast and improper form labeling from Andrew Yang's site." loading="lazy" />
	</picture>
	{% figcaption %}
		From Andrew Yang's site: The image on the left shows low contrast in the first five links, only 1.66:1 ratio when the minimum required is 3:1 for large text. On the right the form is using placeholders instead of labels and the labels also fail to meet contrast standards, only 1.99:1 when the standard is 4.5:1 to small text.
	{% endfigcaption %}
{% endfigure %}

| Test | Outcome | Notes |
| --- | --- | --- |
| Skip Link | Fail | No Skip Link. |
| Navigate by keyboard | **Pass** | Correctly had the "Chip in" banner that is fixed at the bottom of the screen last in the tab order. Most of the carousels were traversed by the tab key, but the endorsement carousel required the enter key, which could be confusing and cause users to miss the endorsements. |
| Focus indicators | Fail | Mixed - Chrome and Safari fared better than Firefox, with most focusable items indicated but several that did not meet contrast standards. None of the forms were visually indicated. |
| Color contrast | Fail | Most of the sections had contrast issues. The text of "Why I'm running for Mayor", the "Andrew’s Plans to Move NYC Forward" section and the text of "Let's move New York forward." passed. |
| Heading Levels | Fail | There are two ```h1``` headings and both jump directly to ```h3```, there is also a missing ```h3```. |
| Alt text | Fail | Many images had proper alt tags but some of the images in the endorsement carousel did not have alt tags. |
| Labels in forms | Fail | All of the form inputs used placeholders rather than labels. |
| Content resizing | Fail | Some of the content did not flow in a readable manner. Also, the fixed menu and "Chip in" donate banner at the bottom reduced the usable size to a small percentage of the screen. The bottom banner can be closed but the menu is persistent. |
| Accessibility Statement | Fail | No Accessibility Statement. |
| Works without JavaScript | Fail | YouTube video and donation banner fixed at the bottom of the page did not load. |



#### Test results for Andrew Yang's site
* [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.yangforny.com%2F)
* WAVE - Ran locally due to scripting error using web based service
* [W3C HTML Validator](https://validator.w3.org/nu/?showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fwww.yangforny.com%2F)

---

### Dianne Morales
[Dianne Morales for NYC Mayor](https://www.dianne.nyc/)  
Platform: Squarespace  
Reviews passed: 3 out of 10

Overall the site has good contrast and focus indication but a few frustratingly close contrast ratios kept those areas from passing. The site has a Skip Link and most of the site was navigable by keyboard with the exception of the fixed "Language" widget.  

{% figure %}
	<picture>
		<source srcset="/img/morales.avif" type="image/avif">
		<source srcset="/img/morales.webp" type="image/webp">
		<img src="/img/morales.png" alt="An example of poor contrast and a form with both good and bad contrast from Dianne Morales' site." loading="lazy" />
	</picture>
	{% figcaption %}
		From Dianne Morales' site: If JavaScript is turned off or fails to load, many images in Morales' site didn't load. On the left shows the "No going back" section with severe contrast issues when the image is missing. The form on the right is a mixed bag of passing and failing examples. Passing: Proper use of labels, good focus indication contrast and button contrast. Failing: The inputs lack the needed 3:1 contrast ratio against the background, and the placeholder in the Email input also lacks the required 3:1 contrast ratio.
	{% endfigcaption %}
{% endfigure %}


| Test | Outcome | Notes |
| --- | --- | --- |
| Skip Link | **Pass** |  |
| Navigate by keyboard | Fail | The content of the site is accessible by keyboard but the small language selection widget fixed at the bottom of the screen is not. |
| Focus indicators | Fail | Everything but the "Choose your future" form had good indication. |
| Color contrast | Fail | Many of the fails were close to a passing ratio, particularly the white text on the orange buttons ("Donate", "See how we create dignity for all", etc.). The text over the image in the hero section passed in some places and not others on desktop but likely would not fare as well on smaller screens. The "No going back" section failed as the contrast between the predominant lightest color was insufficient, but could easily be tweaked to pass. The "Get Campaign Updates" inputs also did not have enough contrast against the background.  |
| Heading Levels | Fail | Jumped from ```h1``` heading to ```h3``` and ```h2``` heading to ```h4```   |
| Alt text | **Pass** | All images had alt text, although there is room for improvement. The endorsement images are using the file name as the alt text, which adds no value for screen reader users or when the image doesn't render. Changing it to the name would be an easy improvement.  |
| Labels in forms | **Pass** |  |
| Content resizing | Fail | Most of the content flowed well, but there were issues in the "Every New Yorker Deserves Dignity" section, "Divest from the Police" section and the footer. |
| Accessibility Statement | Fail | No Accessibility Statement. |
| Works without JavaScript | Fail | Some styles and images didn't load causing contrast errors in the navigation and "No going back" sections. The forms also did not load. |


#### Test results for Dianne Morales' site
* [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.dianne.nyc%2F)
* [WAVE](https://wave.webaim.org/report#/https://www.dianne.nyc/)
* [W3C HTML Validator](https://validator.w3.org/nu/?showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fwww.dianne.nyc%2F)

---

### Eric Adams
[New York City's Next Mayor](https://ericadams2021.com/)  
Platform: WordPress  
Reviews Passed: 1 of 10

Several of the review criteria was a mix of pass and fails, such as a single missing alt tag and one form with correct label usage and one without. The other candidates sites were mostly usable with JavaScript, only missing a few elements, but Adams' site barely loaded and had layout issues. One positive example was the "Candidate fully invested" section had good color contrast against an image background.

{% figure %}
	<picture>
		<source srcset="/img/adams.avif" type="image/avif">
		<source srcset="/img/adams.webp" type="image/webp">
		<img src="/img/adams.png" alt="An example of improper site loading with no JavaScript and poor color contrast from Eric Adams' site." loading="lazy" />
	</picture>
	{% figcaption %}
		From Eric Adams' site: Adam's site is unusable if JavaScript is turned off or fails to load. The image on the left shows bunched up content stacked on top of each other when JavaScript is disabled. On the right the form shows insufficient contrast with white text against a light blue background. The contrast ratio is 2.03:1. A ratio of at least 3:1 is required for the inputs and larger text and a ratio of at least 4.5:1 for the smaller text (placeholders and help text underneath). Another issue with the form is that it's using placeholders instead of labels. Both the button text and the button background color against the page background have good contrast.
	{% endfigcaption %}
{% endfigure %}


| Test | Outcome | Notes |
| --- | --- | --- |
| Skip Link | Fail | No Skip Link. |
| Navigate by keyboard | **Pass** | There seemed to be some double clicking needed in the "Bold Steps for NYC" section but without good focus indication it was hard to tell. Overall the entire page could be traversed. |
| Focus indicators | Fail | Chrome and Safari has more visual indication that Firefox, but indication was missing in forms and some indication did not meet color contrast standards. |
| Color contrast | Fail | The white text against light blue in the Donate button and "Help Eric Adams" section was insufficient as well as the privacy and terms links in the Volunteer section and the red on blue "Change is coming" in the footer. |
| Heading Levels | Fail | Missing levels in several places. |
| Alt text | Fail | There was only one missing alt tag in the text image of "The People's Candidate". It would be easy to add the alt tag and either leave it blank or provide the text. Either would be correct but providing the text would most closely mirror the design. Adding alt text in the empty alt tag for endorsement logos would provide an improved experience. |
| Labels in forms | Fail | The "Help Elect" form used placeholders instead of labels, but the "Volunteer" form had labels correctly associated to inputs. |
| Content resizing | Fail | Some of the content flowed well but the fixed header took up nearly half of the screen. There were also issues with the two column layout in the "Eric's bold steps for NYC" section and the footer. |
| Accessibility Statement | Fail | No Accessibility Statement. |
| Works without JavaScript | Fail | Much of the site didn't load and what did load had layout issues. |


#### Test results for Eric Adam's site
* [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fericadams2021.com%2F)
* [WAVE](https://wave.webaim.org/report#/https://ericadams2021.com/)
* [W3C HTML Validator](https://validator.w3.org/nu/?showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fericadams2021.com%2F)

---

### Kathryn Garcia
[Garcia for NYC Mayor](https://www.kgfornyc.com/)  
Platform: WordPress  
Reviews passed: 2 out of 10

Garcia's site has a Skip Link and several areas with with good contrast. One easy to fix failure is the form labels, they are implemented correctly to use an ```id``` to associate them to their inputs, but the ```id``` on each input is duplicated in both forms (e.g., both email inputs use ```id="form-email"```). Another issue with the forms are that the floating labels are illegible when typing in the inputs.

{% figure %}
	<picture>
		<source srcset="/img/garcia.avif" type="image/avif">
		<source srcset="/img/garcia.webp" type="image/webp">
		<img src="/img/garcia.png" alt="Examples from Kathryn Garcia's site including poor contrast and form label issues." loading="lazy" />
	</picture>
	{% figcaption %}
		From Kathryn Garcia's site: The image on the left shows contrast issues in the Transportation card. The icon against the page background has a contrast ratio of 1.34:1 and the minimum required is 3:1. The copy within the cards has a contrast of 3.05:1 and the minimum is 4.5:1 for smaller text. There is focus indication pictured on the card title that meets the contrast standard, but it appears more faint than pictured because it's using a dotted line rather than a solid line. The image on the right shows a form with good overall contrast, but the floating label is cut off when an input has focus. In the example the "Email" label is only partially visible as I typed in the input.
	{% endfigcaption %}
{% endfigure %}


| Test | Outcome | Notes |
| --- | --- | --- |
| Skip Link | **Pass** |  |
| Navigate by keyboard | Fail | The content of the site is accessible by keyboard but the small language selection widget fixed at the bottom of the screen is not. |
| Focus indicators | Fail | Most elements had indication but many of them failed to meet contrast standards. |
| Color contrast | Fail | Much of the site had good contrast, particularly the white and green text on the dark blue background, but the navigation and cards in the "Priorities" section did not meet contrast standards. |
| Heading Levels | Fail | Missing levels in several places. |
| Alt text | **Pass** | All images had an alt tag but several images had a blank alt tag that could've used text. Adding alt text to the endorsement logos would provide a better experience for screen reader users.  |
| Labels in forms | Fail | While the labels are implemented correctly they are not properly associated to inputs because the ```id``` on each input is duplicated or used in each instance of the form. E.g., the "Email" input in both forms uses ```id="form-email"```, changing the ```id``` for each input in one of the forms would fix the issue. The floating labels are also not legible when typing in the inputs. |
| Content resizing | Fail | Most of the content flowed well but the navigation and the footer were not usable.  |
| Accessibility Statement | Fail | No Accessibility Statement. |
| Works without JavaScript | Fail | The forms disappear when JavaScript is disabled and submenus in the navigation are not accessible via keyboard. |


#### Test results  for Kathryn Garcia's site
* [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.kgfornyc.com%2F)
* [WAVE](https://wave.webaim.org/report#/https://www.kgfornyc.com/)
* [W3C HTML Validator](https://validator.w3.org/nu/?showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fwww.kgfornyc.com%2F) - There was a fatal error at the 12th error and it could not complete.

---

### Maya Wiley
[Maya for Mayor](https://www.mayawileyformayor.com/)  
Platform: Next.js  
Reviews passed: 3 out of 10

Wiley's site overall has very good contrast with some relatively easy to fix exceptions. She is also the only candidate with an [Accessibility Statement](https://www.mayawileyformayor.com/accessibility/), I've sent an email with my findings and will update this post (or write another one!) if hear back. The biggest fails were lack of a Skip Link, no focus indication and almost no alt tags. There were also issues with forms.

{% figure %}
	<picture>
		<source srcset="/img/wiley.avif" type="image/avif">
		<source srcset="/img/wiley.webp" type="image/webp">
		<img src="/img/wiley.png" alt="Examples from Maya Wiley's site including poor contrast, content reflow issues and form label issues." loading="lazy" />
	</picture>
	{% figcaption %}
		From Maya Wiley's site: The "Contact Information" form on the left has several contrast issues. The labels and focus indication are good but the (optional) text, the inputs and the "By submitting your..." text all fall short of the minimum contrast ratio. On the top right, when the screen is zoomed to 400% the "Add Your Name" form is obscured by the fixed "Make a Donation" banner. On the bottom right the form inputs on the purple background have red error text that does not have sufficient contrast. The "Contact Information" form did not have this type of validation.
	{% endfigcaption %}
{% endfigure %}


| Test | Outcome | Notes |
| --- | --- | --- |
| Skip Link | Fail | No Skip Link. |
| Navigate by keyboard | **Pass** | While the site can be traversed via keyboard, there is no focus indication until the "Make a Donation" section at the bottom of the page, making it difficult to orient on the page. Adding to that, the tabbing through the embedded Tweet section also tabs through any links or hashtags within the embedded Tweets, making it difficult to get through the page.  |
| Focus indicators | Fail | There is very little focus indication. |
| Color contrast | Fail | The majority of the site has very good contrast, but there were a few issues in the "Sign up" section. The (optional) text, form input outlines and "By submitting your cell phone..." text all fell short of the required contrast ratio. The "Add your name" button has a contrast ratio of 3.29:1 where the minimum required for small text is 4.5:1. Elsewhere the red "Required" error text for inputs lacks sufficient contrast against the purple background. |
| Heading Levels | **Pass** |  |
| Alt text | Fail | Only the logo in the site header has an alt tag with alt text. |
| Labels in forms | Fail | The "Join Us" and "Add Your Name" forms have empty labels that are not associated to the inputs, but the "Add Your Name" form has correctly associated labels. |
| Content resizing | Fail | For the most part the content flows fine, with the exception of the endorsement section where the text runs together, but the real problem is that the fixed "Make a Donation" banner at the bottom of the screen could cover up the "Add Your Name" form depending on the screen size, making it hard or impossible to use. |
| Accessibility Statement | **Pass** |  |
| Works without JavaScript | Fail | Forms and some images did not load. |


#### Test results for Maya Wiley's site
* [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fmayawileyformayor.com%2F)
* [WAVE](https://wave.webaim.org/report#/https://mayawileyformayor.com/)
* [W3C HTML Validator](https://validator.w3.org/nu/?showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fwww.mayawileyformayor.com%2F)

---

### Ray McGuire
[Ray for Mayor](https://www.rayformayor.com/)  
Platform: Squarespace  
Reviews passed: 5 out of 10

McGuire's site had the best showing of the group overall and could be easily improved with a few fixes. Another notable aspect of the site is the simplicity of the homepage. While most of the candidates loaded their homepages with carousels, images and multiple sections, McGuire's homepage is straight forward and easy to navigate regardless of the method.

{% figure %}
	<picture>
		<source srcset="/img/mcguire.avif" type="image/avif">
		<source srcset="/img/mcguire.webp" type="image/webp">
		<img src="/img/mcguire.png" alt="Examples from Ray McGuire's site including poor contrast and a form that didn't load when JavaScript was unavailable." loading="lazy" />
	</picture>
	{% figcaption %}
		From Ray McGuire's site: On the left, the "Sign up" form in the hero section does not load without JavaScript, leaving a call to action with no form. On the right is one of the inputs from the "Sign up" form, generally it has good contrast with the exception of the focus indication, which is barely visible.
	{% endfigcaption %}
{% endfigure %}


| Test | Outcome | Notes |
| --- | --- | --- |
| Skip Link | **Pass** |  |
| Navigate by keyboard | **Pass** |  |
| Focus indicators | Fail | Most of the site has very good indication, but the form input indication doesn't have sufficient contrast and the form's button has no indication. |
| Color contrast | Fail | The text and graphic elements all have great contrast, but the form lacks sufficient contrast in focus indication. The (Optional) label text also lacks sufficient contrast against the background. |
| Heading Levels | **Pass** |  |
| Alt text | Fail | Only the celebrity endorsement image is missing an alt tag, which would be easy to fix. Also of note, alt text was present on a tracking pixel but it's using the file name rather than descriptive text. |
| Labels in forms | **Pass** |  |
| Content resizing | **Pass** |  |
| Accessibility Statement | Fail | No Accessibility Statement. |
| Works without JavaScript | Fail | The form and some images did not load. |


#### Test results for Ray McGuire's site
* [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.rayformayor.com%2F)
* [WAVE](https://wave.webaim.org/report#/https://www.rayformayor.com/)
* [W3 HTML Validator](https://validator.w3.org/nu/?showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fwww.rayformayor.com%2F)

---

### Scott Stringer
[Stringer for Mayor](https://stringerformayor.com/)  
Platform: WordPress  
Reviews passed: 2 out of 10

Stringer's site was one of only two that had proper form labels. The site also did well with alt text, but there were several contrast and focus indication issues. One notable was issue is a fixed "Join Team Stringer" banner at the bottom the screen. It was not in the [proper order](https://www.w3.org/TR/WCAG20-TECHS/C27.html) for keyboard navigation, and it remained in the tab order if the banner had been dismissed and was no longer visible.

{% figure %}
	<picture>
		<source srcset="/img/stringer.avif" type="image/avif">
		<source srcset="/img/stringer.webp" type="image/webp">
		<img src="/img/stringer.png" alt="Examples from Scott Stringer's site including poor contrast and fixed elements causing problems when the screen is zoomed." loading="lazy" />
	</picture>
	{% figcaption %}
		From Scott Stringer's site: On top, only parts of the menu of good contrast against the background, and depending on the visitor's screen size and device this could mean all or most of the menu is hard to read. On the bottom left, when the screen is zoomed to 400% the fixed elements (top banner, menu and bottom fixed form) make it harder to read the content. The menu is also cut off with no way for the visitor to access the items that are not visible. On the bottom right, every element of the form lacks sufficient contrast.
	{% endfigcaption %}
{% endfigure %}


| Test | Outcome | Notes |
| --- | --- | --- |
| Skip Link | Fail | No Skip Link. |
| Navigate by keyboard | Fail | The "Join Team Stringer" banner fixed at the bottom of the screen is in between "Read Scott's Plan" hero section and the "Experience" section in the tab order. The banner is also in the tab order regardless of whether or not it's visible. If the visitor has closed the banner and then clicks through the page, they will still have to click through the eight fields in the layer that are not visible. |
| Focus indicators | Fail | Not everything has focus indication and not all elements with indication meet color contrast ratio standards.  |
| Color contrast | Fail | Some of the top level navigation does not have sufficient contrast against the image background, this could vary depending on the visitor's screen size. The blue on blue buttons ("View All", "Join Team Stringer") lack sufficient contrast for the text within the button but have enough contrast against their respective backgrounds. The "Paid for by Scott Stringer for Mayor" text in the footer also lacks sufficient contrast.  |
| Heading Levels | Fail | Out of sequence headings with a ```h2``` before the ```h1```. |
| Alt text | **Pass** |  |
| Labels in forms | **Pass** |  |
| Content resizing | Fail | The site content flowed well but only part of the menu was off the screen with no way to scroll to it. |
| Accessibility Statement | Fail | No Accessibility Statement. |
| Works without JavaScript | Fail | The "Join Team Stringer" banner and form did not load. |


#### Test results for Scott Stringer's site
* [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fstringerformayor.com%2F)
* [WAVE](https://wave.webaim.org/report#/https://stringerformayor.com/)
* [W3 HTML Validator](https://validator.w3.org/nu/?showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fstringerformayor.com%2F)

---

### Shaun Donovan
[Shaun Works for NYC](https://shaunfornyc.com/)  
Platform: WordPress  
Reviews passed: 2 out of 10

Donovan's site has a Skip Link and proper alt tags, but there were plenty of contrast and focus indication issues and the carousel of Tweets caused problems keyboard navigation issues.

{% figure %}
	<picture>
		<source srcset="/img/donovan.avif" type="image/avif">
		<source srcset="/img/donovan.webp" type="image/webp">
		<img src="/img/donovan.png" alt="Examples from Shaun Donovan's site including poor contrast in several areas." loading="lazy" />
	</picture>
	{% figcaption %}
		From Shaun Donovan's site: On the top, the white text against the blue background in the "Chip in" section has a 4.16:1 contrast ratio. This is sufficient for the larger "Are you with us..." text where the minimum ratio is 3:1, but insufficient in the smaller copy text where the minimum contrast ratio is 4.5:1. The white text against the orange buttons has a contrast ratio of 3.13:1, which just meets the standard for larger text.  On the bottom, the gray on gray footer text has a contrast ratio of 2.24:1, which is below the minimum of 3:1.
	{% endfigcaption %}
{% endfigure %}


| Test | Outcome | Notes |
| --- | --- | --- |
| Skip Link | **Pass** |  |
| Navigate by keyboard | Fail | The carousel of Tweets are in the tab order but tabbing through them does not change the carousel, so it appears to the user that nothing is happening. I had to tab 19 times before moving from the carousel to the "Join the Team" input, it would be easy for someone to give up because they can't tell anything is happening. |
| Focus indicators | Fail | Many elements did not have focus indication and the few that did have indication did not have sufficient contrast. |
| Color contrast | Fail | Many elements did not have sufficient contrast, including text in the "Are you with us" section and the bottom part of the footer. |
| Heading Levels | Fail | Missing ```h1```. |
| Alt text | **Pass**  |  |
| Labels in forms | Fail | Inputs are missing labels. |
| Content resizing | Fail | Most of the content flowed well but the placeholders in the form inputs were cut off as was the button text. The "Repair. Rebuild. Reimagine." header was cut off. |
| Accessibility Statement | Fail | No Accessibility Statement. |
| Works without JavaScript | Fail | Entire hero area does not load. |


#### Test results for Shaun Donovan's site
* [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fshaunfornyc.com)
* [WAVE](https://wave.webaim.org/report#/https://shaunfornyc.com)
* [W3 HTML Validator](https://validator.w3.org/nu/?showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fshaunfornyc.com%2F)

---

## Summary
Does a candidate's lack of an accessible campaign site mean they won't be a good Mayor for disabled New Yorkers? Of course not, but it also doesn't inspire confidence. Alternatively, the candidate whose campaign site was the most accessible (by these high-level overview at any rate) isn't guaranteed to be the best candidate for an accessible, equitable and inclusive New York City.

I hope that by highlighting the relative inaccessibility of these sites that it brings more awareness to the importance of ensuring that all experiences work for everyone. Please [contact me via email](mailto:{{ author.email }}) or [on Twitter]({{ author.twitterUrl }}) if you have any feedback or suggestions regarding this post.
