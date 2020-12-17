const cross = document.querySelector('.search__cross');
const form = document.querySelector('.search');

function clearInput() {
    cross.addEventListener('click', () => {
        form.reset();
    });
}

clearInput();
