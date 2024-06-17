# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://tortaruga.github.io/newsletter-sign-up-form/#](https://tortaruga.github.io/newsletter-sign-up-form/#)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS

### What I learned

- you can use an image as bullet in a ul (I knew it was possible but I had never used it, so it wasn't really something I learned, but still);
- input elements have an outline when active! I couldn't style the border as the color I wanted, and it turned out to be because I needed to remove the outline first;
- the z-index of the parent has to be set explicitly
for the gradient shadow effect to work:

```
.some-div {
  position: relative;
  background: linear-gradient(90deg, lightblue, pink);
  <!-- until I set this the ::before pseudoelemnt wouldn't show up -->
  z-index: 0;
}

.some-div::before {
  content: '';
  position: absolute;
  z-index: -1;
  inset: -1px;
  background: inherit;
  filter: blur(10px);
}
```

- a form's method should be post if it handles sensitive information like a user's email;
- I have to prevent default behaviour in my validateForm(e) function or else nothing happens when you push the damn button;
- learned a little bit more about regular expressions;
- you can style a placeholder!!

```
.input::placeholder {
  color: orange;
}
```

- not really something I learned, but something I'm getting better at: using classes in conbination with js to trigger style changes: 

```
    emailInput.classList.add('error');
```

```

#email-address.error::placeholder {
  color: var(--tomato);
}
```

I know it's something silly but before now I just wouldn't have thought of it!

- something else I'm proud of even though it's not exactly something I learned:

```
userMail.textContent = emailInput.value.trim();
```

```
<p>A confirmation email has been sent to <strong id="user-mail">ash@loremcompany.com</strong>. 
    Please open it and click the button inside to confirm your subscription.
  </p>
```

I know it's not groundbreaking, but I'm so happy that I thought of it because it feels like I'm starting to get better at thinking like a developer!  

### Continued development

Regular expressions still confuse me a lot, but I think that I'll get the hang of them by using them in practical projects instead of trying to remember the rules and patterns.

I'm not very good at forms either, so I want to work on that as well.

## Author

- Frontend Mentor - [@tortaruga](https://www.frontendmentor.io/profile/tortaruga)
