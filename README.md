# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![Desktop Version](./images/Frontend%20Mentor%20FAQ%20Accordion%20Card%20Desktop.png)
![Mobile Version](./images/Frontend%20Mentor%20FAQ%20Accordion%20Card%20Mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I determined that I will take approximately 5 hours to complete the challenge, and 1 hour to fine tune it
after I submit it and review other code and my estimation was very close. I took 5 Hours 20 mins to complete the challenge.

To do the dropdowns without javascript, i used the `:focus` pseudoselector on the button and selected the sibling element,
in my case the answer to the question, and set it to display. It is not have very fancy animations but it certainly works!
Because I used buttons, all of them are on the tabindex by default so keyboard only users can access the questions.

I went with a mobile first workflow and built the dropdown using javascript initially. However I realised that I could
accomplish the same thing using the focus class and I changed my code.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learnt that I should do the easy part of the styling and the base functionality of the page first, and go onto the things that
I am unfamiliar with afterward. I took a while to realise that I should use the `<img>` to link to the svg and it would scale automatically.
Strangely, I tried that initially and it didn't work, which is why I went searching for another way to do it.

I also learnt that JavaScript is handy, but not **always** necessary for certain applications.

### Continued development

I wish to come back to this project and try to add a basic animation to the dropdown and perhaps
discover another way of achieving the same as I did in this project.

### Useful resources

- [W3Schools](https://www.w3schools.com) - This site helped me find out how css properties worked and which JavaScript function I would need to use

## Author

- Frontend Mentor - [@Ishmaelsealey](https://www.frontendmentor.io/profile/Ishmaelsealey)
- Instagram - [@ishmael.sealey](https://www.instagram.com/ishmael.sealey)
