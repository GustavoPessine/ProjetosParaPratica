function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botao.removeAttribute('disabled');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        botao.setAttribute('disabled', true);
    };
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    alterarStatusBotao();
}

function sortear() {
    let quantidade = parseFloat(document.getElementById('quantidade').value);
    let de = parseFloat(document.getElementById('de').value);
    let ate = parseFloat(document.getElementById('ate').value);
    // Verifica se os campos estão preenchidos
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        alert('Por favor, preencha todos os campos para executar o sorteio com as informações dos campos');
        return;
    }

    if (!Number.isInteger(quantidade) || !Number.isInteger(de) || !Number.isInteger(ate)) {
        alert('Por favor, digite números inteiros para serem usados no sorteio!');
        return;
    }

    if (quantidade > 20 || de > 20 || ate > 20) {
        alert('Por favor, não inserir números muito grandes nos campos de input, esta aplicação não suporta números maiores que 20 nos campos!');
        return;
    }

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }

    alterarStatusBotao();

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = gerarNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
}
// Chame a função alterarStatusBotao() se necessário, por exemplo, ao iniciar o aplicativo
