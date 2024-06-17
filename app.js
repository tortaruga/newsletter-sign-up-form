const emailInput = document.getElementById('email-address');
const successMsg = document.querySelector('.success-msg');
const invalidEmail = document.getElementById('invalid-email');
const container = document.querySelector('.container');
const dismissBtn = document.getElementById('dismiss-btn');
const userMail = document.getElementById('user-mail')

function validateForm(event) {
    event.preventDefault();

  const emailRegex = /^[a-zA-Z0-9.-_+%]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(emailInput.value.trim())) {
    successMsg.style.display = 'flex';
    userMail.textContent = emailInput.value.trim();
    container.style.display = 'none';
  } else {
    invalidEmail.style.display = 'inline';
    emailInput.style.color = 'var(--tomato)';
    emailInput.style.border = 'var(--tomato)';
  }
}

dismissBtn.addEventListener('click', () => {
    location.reload();
})
