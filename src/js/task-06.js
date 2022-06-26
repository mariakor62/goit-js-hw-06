const textInput = document.querySelector('#validation-input');
const dataInput = document.querySelector('[data-length="6"]');
const datasetLength = dataInput.dataset.length;

textInput.addEventListener('blur', onInputBlur)

function onInputBlur() {
    if (textInput.value.length == datasetLength) {
        textInput.classList.remove('invalid')
        textInput.classList.add('valid')
    } else {
        textInput.classList.remove('valid')
        textInput.classList.add('invalid')
    }
} inputClear.addEventListener('blur', onInputBlur);

