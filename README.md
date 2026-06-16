# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Screenshot

![Solution screenshot](<Capture d’écran 2026-06-16 à 11.50.07.png>)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  /*Modifiers*/
  /* On utilise le chemin complet pour avoir la même priorité que les styles de base */
  .container .container__cards .container__cards-card.card--accent {
    background: var(--clr-gradient);

    .container__cards-cardTitle,
    .container__cards-cardPricing,
    .container__cards-cardText {
      color: var(--clr-accent);
    }

    .container__cards-cardText::after {
      border-top-color: var(--clr-accent);
    }
  }
}
```

```js
const proudOfThisFunc = () => {
  prices.forEach((price) => {
    // 1. On vérifie l'état du toggle
    if (toggle.checked) {
      // 2. On récupère la valeur mensuelle stockée dans le HTML
      price.innerText = `${price.dataset.monthly}`;
    } else {
      // 3. On récupère la valeur annuelle
      price.innerText = `${price.dataset.yearly}`;
    }
  });
};
```

### Continued development

For my future project, you can follow me on X, Malt, Instagram and LinkedIn.

### Useful resources

- [Example resource 1](https://stackoverflow.com/questions/76837048/creating-the-simplest-html-toggle-button) - This helped me for creating the toggle button. I really liked this pattern and will use it going forward.

### AI Collaboration

- Gemini helps me understand better the js part of the challenge.
- Also he explains me how to realize also this project in fully CSS3.

## Author

- Website - [Yann LE FLOHIC](SOON...)
- Frontend Mentor - [@YannLf3](https://www.frontendmentor.io/profile/YannLf3)
- Twitter - [@YannLf3](https://x.com/YannLf3)
