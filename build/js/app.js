const btnSumbit = document.querySelector('.button-submit');
const inputCorreo = document.querySelector('#email');
const elementoError = document.querySelector('.newsletter__footer--error');
document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    verificarCorreo();
}

function verificarCorreo(){
    const expRegular = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    btnSumbit.addEventListener('click', (e) => {
        e.preventDefault();
        let okEmail = expRegular.test(inputCorreo.value);
        if(okEmail){
            elementoError.classList.remove('newsletter__footer--error');
            elementoError.classList.add('newsletter__footer--succesful');
            elementoError.textContent = "E-mail successfully sent";
            return;
        }        
        elementoError.classList.remove('newsletter__footer--succesful');
        elementoError.classList.add('newsletter__footer--error');
        elementoError.textContent = "Check your email please";
    });
    
}
