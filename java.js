const container = document.querySelector('container'),
inputUsuario = document.querySelector('.form input'),
botao = document.querySelector('.form button'),
imagem = document.querySelector('.imagem'),
url = document.querySelector('.form .qr-code');


botao.addEventListener('click', () => {
    let inputValor = inputUsuario.value;
    if(!inputValor){
        alert('Coloque alguma URL ou insira algum texto')
        return;
    }
    botao.innerText = 'Gerando QR Code...';
    imagem.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValor}`;


    imagem.addEventListener('load', () => {
        url.classList.add('ativo');
        botao.innerText = 'Gerar QR Code';

    });
});

    inputUsuario.addEventListener('keyup', () => {
        if(!inputUsuario.value){
            url.classList.remove('ativo');
            return
        }
    });