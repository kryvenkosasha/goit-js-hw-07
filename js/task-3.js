  let inputElement = document.getElementById("name-input");
  let inputValue = inputElement.value.trim();

  let outputElement = document.getElementById("name-output");

  if (inputValue !== "") {
    outputElement.textContent = inputValue;
  } else {
    outputElement.textContent = "Anonymous";
  }

