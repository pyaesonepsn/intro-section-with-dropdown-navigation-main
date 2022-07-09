# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [https://github.com/pyaesonepsn/intro-section-with-dropdown-navigation-main](https://your-solution-url.com)
- Live Site URL: [https://pyaesonepsn.github.io/intro-section-with-dropdown-navigation-main/]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript



### What I learned

In this project, I have learned to use JavaScript DOM manipulation for the dropdown navigation items. 

I learned to animate the close navigation bar button using below CSS codes...
```css
.toggle .btn-line:nth-child(1){
  transform: rotate(-45deg) translate(-7px, 5px);
}

.toggle .btn-line:nth-child(2){
  opacity: 0;
}

.toggle .btn-line:nth-child(3){
  transform: rotate(45deg) translate(-5px, -5px);
}
```
I learned to use below JavaScript DOM to show up the hidden navigation items.
```js
btnFeatures.addEventListener('click', () => {
  dropdownContentFeatures.classList.toggle('show-features')
  btnFeaturesIcon.classList.toggle('transform');
  btnFeatures.classList.toggle('toggle-color')
});
```


### Continued development

In the future project, I have to focus to use JavaScript DOM and CSS styles combinations to animate features for landing pages.


### Useful resources

- [https://www.w3schools.com/css/css_dropdowns.asp]() - This helped me to develop dropdown navigation items.


## Author

- Website - [https://github.com/pyaesonepsn]()
- Frontend Mentor - [https://www.frontendmentor.io/profile/pyaesonepsn]()
- Twitter - [https://www.twitter.com/pyaesonepsn]()



