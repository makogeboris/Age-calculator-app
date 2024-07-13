# Frontend Mentor - Age calculator app solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](/design/desktop-preview.jpg)

### Links

- [Solution](https://github.com/mkboris/age-calculator-app)
- [Live Site](https://age-calculator-app-theta-nine.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Animate.css

### What I learned

Learned about the `Date` object and implementing it to calculate the age accurately. I faced some difficulties getting the logic right with getting the age in months and days, but I did some research and got it right. I wasn't able to implement the logic if the user inputs an invalid date e.g. 31/04/1991 (there are 30 days in April).

### Continued development

Working with dates and time can be tricky next time I will practice using a date library to get the outcome.

## Author

- Frontend Mentor - [@mkboris](https://www.frontendmentor.io/profile/mkboris)
