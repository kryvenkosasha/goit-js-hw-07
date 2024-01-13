const form = document.querySelector('.login-form')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = form.elements['email'];
    const passwordInput = form.elements['password'];

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === '' || passwordValue === ''){
        return alert('All form fields must be filled in');
    };

     const formData = {
       email: emailValue,
       password: passwordValue,
     };
    
    // console.log(formData);

    form.reset();
})
