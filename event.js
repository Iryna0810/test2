// const form = document.querySelector('.js-register-form');
// console.log(form);


// /*---------------FORM DATA-----------*/
// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

    // const formElements = event.currentTarget.elements;
    // console.dir(formElements);

    // const mail = formElements.email.value;
    // const password = formElements.password.value;
    // const subscription = formElements.subscription.value;

    // const formData = {
    //     mail, 
    //     password, 
    //     subscription,
    // }


    // console.log(formData);

    
//     const formData = new FormData(event.currentTarget);
//     formData.forEach((value, name) => {
//         console.log('onFormSubmit -> name', name);
//         console.log('onFormSubmit -> value', value);
//     }
//     )
// }

/*-----------------------ПАТТЕРН ОБ'ЄКТ ПОСИЛАНЬ-------------------------------------------*/

// const refs = {
//     input : document.querySelector('.js-input'),
//     nameLabel : document.querySelector('.js-button > span'),
//     licenseCheckbox : document.querySelector('.js-license'),
//     btn : document.querySelector('.js-button'),
// }

// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

// function onInputFocus() {
//     console.log('Імпут отримав фокус - подія focus');
// }
    
// function onInputBlur() {
//     console.log('Імпут втратив фокус - подія blur');
// }

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);

// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChangeAll);

// function onInputChange(event) { 
//     console.log(event.currentTarget.value);
// };

// function onInputChangeAll(event) {
//     console.log(event.currentTarget.value);
//     refs.nameLabel.textContent = event.currentTarget.value;
//     console.log(refs.nameLabel.textContent.length)
// }

// refs.licenseCheckbox.addEventListener('change', onLicenseChange);

// function onLicenseChange(event) {
//     console.log(event.currentTarget.checked)

//     refs.btn.disabled = !event.currentTarget.checked;
// }


// const button = document.querySelector(".button");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);


// const imgEl = document.querySelector('.js-img');
// const swapBtnEl = document.querySelector('.js-swap-btn');
// const removeListenerBtnEl = document.querySelector('.js-remove-listener');

// const handleSwapImg = () =>{
//     imgEl.src = 'https://picsum.photos/200/300';
// }

// swapBtnEl.addEventListener('click', handleSwapImg);
// removeListenerBtnEl.addEventListener('click', () => {
//     swapBtnEl.removeEventListener('click', handleSwapImg);
// }

const formEl = document.querySelector('.js-contact-form');
const formInputEl = document.querySelector('.js-username-input');
const formCheckboxEl = document.querySelector('.js-policy-checkbox');
const userNameOutputEl = document.querySelector('.js-username-output');
const formSubmitBtnEl = document.querySelector('.js-contact-form-submit');

formInputEl.addEventListener('focus', (event) => {
    console.log(event);
    event.target.style.outline = '4px solid teal';
})

formInputEl.addEventListener('blur', (event) => {
    event.target.style.outline = 'none'
})

formInputEl.addEventListener('input', (event) => {
    console.log(event.target.value);
    userNameOutputEl.textContent = event.target.value;
})

formCheckboxEl.addEventListener('change', (event) => {
    console.log(event.target);
    if (event.target.checked && formInputEl.value !== '') {
        formSubmitBtnEl.disabled = false;
        return;
    }
    formSubmitBtnEl.disabled = true;
});

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(formInputEl.value);
    event.target.reset();
    userNameOutputEl.textContent = '';
    formSubmitBtnEl.disabled = true;
    
})



