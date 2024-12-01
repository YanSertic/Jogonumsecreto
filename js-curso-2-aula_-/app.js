let listanumeroSorteado = [];
let numeroLimite = 10;


function gerarNumeroAleatorio (){
    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
    let quantidadedeElementosnaLista = listanumeroSorteado.length;

    if(quantidadedeElementosnaLista == numeroLimite){
        listanumeroSorteado = [];
    }

    if (listanumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listanumeroSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
    
}

function exibirTextonaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.Speak(texto, 'Brazilian Portuguese Female', {rate: 1.3});
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
}

function exibirMensagemInicial(){
    exibirTextonaTela ('h1','Jogo do número secreto');
    exibirTextonaTela ('p','Escolha um número de 1 a 10');
}

exibirMensagemInicial();
let tentativas = 1;
let numeroAletorio = gerarNumeroAleatorio()

function verificarChute (){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroAletorio){
        let palavraTentativas = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextonaTela('h1', 'Acertou!');
        exibirTextonaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if ( chute > numeroAletorio){
            exibirTextonaTela('p', 'O número secreto é menor');
        } else{
            exibirTextonaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo(){
    numeroAletorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

