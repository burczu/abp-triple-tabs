const isMonsterSelected = () => {
  // find the checked radio button
  const selected = document.querySelector('input[type="radio"]:checked');

  // if found, return boolean
  return Boolean(selected);
};

const isNameAndEmailFilled = () => {
  // find both input values
  const name = document.querySelector('input[name="name"]');
  const email = document.querySelector('input[name="email"]');

  // if both of them have value, return true - false otherwise
  return name.value && email.value;
};

const handleSuccess = () => {
  // find all the inputs
  const inputs = document.querySelectorAll('input');
  const submitButton = document.querySelector('button[type="submit"]');

  // if inputs found, disable them
  if (inputs && inputs.length > 0) {
    inputs.forEach((input) => {
      input.disabled = true;
    });
  }

  // replace submit button with the "thank you" text
  if (submitButton) {
    const newNode = document.createElement('p');
    newNode.textContent = 'Thank you!';
    newNode.classList.add('App__form-thanks');

    submitButton.parentNode.replaceChild(newNode, submitButton);
  }
};

const handleMonsterFormSubmit = (event) => {
  // prevent standard form behaviour
  event.preventDefault();

  // handle success if monster selected and name and email filled
  if (isMonsterSelected() && isNameAndEmailFilled()) {
    handleSuccess();
  }
};

export const initForm = () => {
  // find the monster form element
  const monsterForm = document.querySelector('#monster-form');

  // if found, attach submit event to the handler
  if (monsterForm) {
    monsterForm.addEventListener('submit', handleMonsterFormSubmit);
  }
};
