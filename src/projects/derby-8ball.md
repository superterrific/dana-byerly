---
title: 'Kentucky Derby Magic 8 Ball'
summary: 'Fun with randomization.'
projectUrl: 'https://2022-derby-8ball.netlify.app/'
allUrls:
  in2018: 'https://2018-derby-8ball.glitch.me/'
  in2019: 'https://2019-derby-8ball.glitch.me/'
  in2020: 'https://2020-derby-8ball.glitch.me/'
  in2021: 'https://2021-derby-8ball.glitch.me/'
  in2022: 'https://2022-derby-8ball.netlify.app/'
category: 'Projects'
date: 2020-09-07
launched: '2018'
displayOrder: 5
landingImg: "8ball"
landingAlt: "A large black circle with a smaller white circle and black 8 are centered on the landing page with a button labeled Who Will Win?."
platform: ['Glitch']
role: ['Code', 'Design']
tags: ['Randomization']
---
I started this project [in 2018]({{ allUrls.in2018 }}) based on [a tutorial by Kelly Lougheed](https://medium.com/@kellylougheed/javascript-magic-8-ball-with-basic-dom-manipulation-1636b83c3c26) by remixing her [Glitch Project](https://glitch.com/~8ball-starter) (thank you!). At the time my Javascript skills were both minimal and very rusty, and this presented a good opportunity have some fun while learning something. Each year since I've been able to make improvements.

## 2018 version
The biggest accomplishment of the [inaugural version]({{ allUrls.in2018 }}), aside from completing it, was modifying it to exclude having to ask the question, albeit what I came up with wasn't very elegant, to put it politely. In the spirit of "you have to start somewhere", this was a decent start.

## 2019 version
[In 2019]({{ allUrls.in2019 }}) I made some refinements to the Javascript, which felt like an accomplishment as I had a better understanding of what was happening rather than just poking at it with no real clue like I had done in the first version. I also made a few CSS and design refinements but the JavaScript was the biggest improvement.

The original version used if/else statements and <code>innerHTML</code> to swap out the placeholder "8" and display the randomized answer.

```js
document.getElementById('answerButton').onclick = function () {var x = document.getElementById("eight");
  if (x.innerHTML === "8") {
    x.innerHTML = "";
  } else {
    x.innerHTML = "";
  }
var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerContainer').innerHTML = answer;
};
```
I changed it use <code>getElementById</code> to manipulate the style of the container (applying the style directly in JavaScript) and then writing the answer using <code>textContent</code>.

```js
document.getElementById('answerButton').onclick = function () {

  let resizeAnswer = document.getElementById("answerContainer").style.fontSize = '2rem';
  let derbyWinner = contenders[Math.floor(Math.random() * contenders.length)];

  document.getElementById('answerContainer').textContent = derbyWinner;
};
```

I'm guessing the updated approach is better than the previous. If nothing else I found the new approach easier to write and understand.

## 2020 version
[This version]({{ allUrls.in2020 }}) took a few steps forward with more JavaScript refinements as well as some CSS and accessibility improvements. I simplified the JavaScript even further by using <code>getElementById</code> with <code>classList.remove</code> and <code>classList.add</code> to swap the "8" and the answer, moving the styling to CSS.

```js
document.getElementById('answer-button').onclick = function () {

  document.getElementById('answer-container').classList.remove('eight');
  document.getElementById('answer-container').classList.add('reveal');
  let derbyWinner = contenders[Math.floor(Math.random() * contenders.length)];

  document.getElementById('answer-container').textContent = derbyWinner;
};
```

The CSS improvements were mostly general clean-up, like moving from fixed sizes to relative. I also included a couple of nice enhancements found in articles. I used [this by Håvard Brynjulfsen](https://uxdesign.cc/create-better-accessible-focus-effects-75a3de27b8ba) to spiff up the focus styles on the button and add a nice drop shadow and the [squishy button active state](https://piccalil.li/quick-tip/squishy-button) came from a [Piccalilli Quick Tip](https://piccalil.li/quick-tips/).

For accessibility I tested using Mac OS VoiceOver and it announced properly in Safari and Chrome, but not Firefox.

## 2021 version
[This version]({{ allUrls.in2021 }}) added some 8 ball-esque animation, improved accessibility and updated design. I might have gone a little overboard with the existing JavaScript approach, but I used the existing <code>getElementById</code> DOM manipulation approach to add animation styles and change the <code>aria-hidden</code> attribute.

```js
document.getElementById('answer-button').onclick = function () {

  document.getElementById('answer-container').classList.remove('eight');
  document.getElementById('answer-container').classList.add('reveal');
  document.getElementById('answer-container').setAttribute("aria-hidden", false); // remove aria-hidden attribute so the answer is read
  document.getElementById('answer').classList.add('answer');
  document.getElementById('eight-ball').classList.add('shake');
  let derbyWinner = contenders[Math.floor(Math.random() * contenders.length)];

  document.getElementById('answer-container').textContent = derbyWinner;
};
```

The first two lines within the function are the existing swap of the placeholder "8" and styling for the randomized answer. The container is set to <code>aria-hidden="true"</code> by default to keep screen readers from announcing the placeholder "8". When the answer is added aria-hidden is changed "false", allowing the answer to announced. This worked in VoiceOver, and I'm hoping it works in other screen readers. The next two additions apply the animations.

I also made a bit of an effort to make it look more like an 8 ball. I [wrote a detailed account of the 2021 changes](/notes/annual-kentucky-derby-8-ball/), including more about the accessibility of the animations and some details about the design if you're interested.

## 2022 version
[This version]({{ allUrls.in2022 }}) moved from [Glitch](https://glitch.com) to [Netlify]({{ tools.netlify }}), mostly to improve my workflow. I also added a dark theme and dropped the media queries.

The media queries were mainly used to control the size of the eight ball. I changed that to use `clamp()` with a fallback, which gives the eight ball a better size and screen usage across devices.

Original sizing
```css
.eight-ball {
  background-color: black;
  border-radius: 50%;
  width: 22rem;
  height: 22rem;
  font-size: 2.2rem;
}

@media only screen and (max-width: 800px) {
  .eight-ball {
    width: 18rem;
    height: 18rem;
  }
}
```

Updated sizing
```css
.eight-ball {
  background-color: var(--color-darkest);
  border-radius: 50%;
  border: 1px solid var(--color-grey-mid);
  width: 18rem;
  width: clamp(18rem, 30vw, 36rem);
  height: 18rem;
  height: clamp(18rem, 30vw, 36rem);
  font-size: 2.2rem;
}
```

I updated the answer background to a blue gradient to give it a bit more of an [original 8 ball vibe](https://futureofworking.com/wp-content/uploads/2016/12/20-Funny-Magic-8-Ball-Sayings.jpg) without trying to figure out how to put the potentially long answers in a triangle.

I'd like to think I could improve the animation, but overall I'm happy with the current state.


View all versions...
* [2022]({{ allUrls.in2022 }})
* [2021]({{ allUrls.in2021 }})
* [2020]({{ allUrls.in2020 }})
* [2019]({{ allUrls.in2019 }})
* [2018]({{ allUrls.in2018 }})
