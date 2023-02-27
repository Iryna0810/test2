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

const refs = {
    input : document.querySelector('.js-input'),
    nameLabel : document.querySelector('.js-button > span'),
    licenseCheckbox : document.querySelector('.js-license'),
    btn : document.querySelector('.js-button'),
}

// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

function onInputFocus() {
    console.log('Імпут отримав фокус - подія focus');
}
    
function onInputBlur() {
    console.log('Імпут втратив фокус - подія blur');
}

refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);

refs.input.addEventListener('change', onInputChange);
refs.input.addEventListener('input', onInputChangeAll);

function onInputChange(event) { 
    console.log(event.currentTarget.value);
};

function onInputChangeAll(event) {
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
}

refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onLicenseChange(event) {
    console.log(event.currentTarget.checked)

    refs.btn.disabled = !event.currentTarget.checked;
}
