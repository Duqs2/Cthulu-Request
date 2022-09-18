const entrar = document.querySelector('.entrar');
const cadastrar = document.querySelector('.cadastrar');
const formCx = document.querySelector('.formCx');
const body = document.querySelector('body')

cadastrar.onclick = function (){
    formCx.classList.add('ativo')
    body.classList.add('ativo')
}

entrar.onclick = function (){
    formCx.classList.remove('ativo')
    body.classList.remove('ativo')
}