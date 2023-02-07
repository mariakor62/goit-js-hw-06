const textInput = document.querySelector('#validation-input');
const maxLength = 6;
textInput.addEventListener('blur', onInputBlur)
function onInputBlur() {
    if (textInput.value.length === maxLength) {
        textInput.classList.remove('invalid')
        textInput.classList.add('valid')
    } else {
        textInput.classList.remove('valid')
        textInput.classList.add('invalid')
    }
}
// inputClear.addEventListener('blur', onInputBlur);



