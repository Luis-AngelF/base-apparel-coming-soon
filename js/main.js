function validateForm() {
    const emailForm = document.querySelector('.email-form')
    const emailInput = document.querySelector('#email')
    const iconError = document.querySelector('.icon-error')
    const errorMessage = document.querySelector('.email-error')

    const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    const email = emailInput.value

    const isValid = regEx.test(email)

    if (isValid) {
        iconError.classList.add('hidden')
        emailForm.classList.remove('error')
        errorMessage.classList.add('hidden')
    } else {
        iconError.classList.remove('hidden')
        emailForm.classList.add('error')
        errorMessage.classList.remove('hidden')
    }

}