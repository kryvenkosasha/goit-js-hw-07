const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');

    nameInput.addEventListener('input', updateName);

function updateName() {
  const enteredName = nameInput.value.trim();
  const displayName = enteredName === '' ? 'Anonymous' : enteredName;

  nameOutput.textContent = displayName;
}