let totalGeral = 0;
limpar();
function adicionar() {
    // Recuperar valores nome do produto, quantidade, e valor
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    // Validar o produto para ver se é válido, se não é quantidade = 0
    if(!produto || produto.trim() === '') {
        alert('Selecione um produto válido');
        return;
}
    if(isNaN(quantidade) || quantidade <= 0) {
    alert('Insira uma quantidade válida');
    return;
}
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    // Calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    // Adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}
    </span> ${nomeProduto} <span class="texto-azul">R$1400</span> </section>`;
    // Atualizar valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = ('R$ 0');
}