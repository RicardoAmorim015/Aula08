const valor = document.querySelector('input');
const botaoA = document.querySelector('.botaoA');
const botaoB = document.querySelector('.botaoB');

botaoA.addEventListener('click', function(e){
    console.log(valor.value);
})

botaoB.addEventListener('click', function(e){
    const paragrafo = document.querySelector('.paragrafo');
    paragrafo.innerHTML = valor.value

})