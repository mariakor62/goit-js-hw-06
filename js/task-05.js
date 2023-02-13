const refs = {
    inputRef: document.querySelector('#name-input'),
    outputRef: document.querySelector('#name-output'),
}
refs.inputRef.addEventListener('input', onInputOutput);

function onInputOutput() {
    refs.inputRef.value === ""
        ? refs.outputRef.textContent = "Anonymous"
        : refs.outputRef.textContent = refs.inputRef.value;
};

