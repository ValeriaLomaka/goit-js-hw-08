import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

form.addEventListener('input', throttle(onFormInput,500));
form.addEventListener('submit',onFormSubmit);

poppulateData();

function onFormInput(event) {
formData[event.target.name] = event.target.value;
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    if (email.value === '' || message.value === '') {
     return alert('Please fill in all fields');
    }
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    event.currentTarget.reset();
}

function poppulateData() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
     email.value = savedData.email || '';
     message.value = savedData.message || '';
    }
}



