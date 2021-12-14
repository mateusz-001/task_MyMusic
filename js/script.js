const form = document.querySelector('.form');
const errorMessage = document.querySelector('.form__error-message');
const IDNumber = document.getElementById('id-number');
const typePerson = document.getElementById('type1');
const typeBusiness = document.getElementById('type2');

form.addEventListener('submit', (e) => {
    if(typePerson.checked && IDNumber.value.length !== 11){
        errorMessage.textContent = 'Numer PESEL musi zawierać 11 cyfr';
        errorMessage.classList.add('form__error-message--active');
        e.preventDefault();
    }else if(typeBusiness.checked && IDNumber.value.length !==10){
        errorMessage.textContent = 'Numer NIP musi zawierać 10 cyfr';
        errorMessage.classList.add('form__error-message--active');
        e.preventDefault();
    }else{};
});

const fileInput = document.getElementById('photo');
const filePreview = document.querySelector('.form__file-preview');
const fileName = document.querySelector('.form__file-name');

fileInput.addEventListener('change', function() {
    const fileObject = this.files[0];
    console.log(fileObject);

    if(fileObject){
        const fileReader = new FileReader();
        fileReader.addEventListener('load', function() {
            filePreview.style.backgroundImage = `url("${this.result}")`
        });
        fileReader.readAsDataURL(fileObject);
    }
})