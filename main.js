const form = document.getElementById('form-nome');
const nomeContato = [];
const addTelefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault(e);

    adicionaLinha();
    atualizaTabela ();

}) 

function adicionaLinha() {
        let inputNome = document.getElementById('nome-contato');
        let inputTelefone = document.getElementById('telefone');

    if (nomeContato.includes(inputNome.value)) {
        alert(`Contato ${inputNome.value} já foi adicionado`);
    } else {
        nomeContato.push(inputNome.value);
        addTelefone.push(parseInt(inputTelefone.value));

        let linha = '<tr>';
        linha +=`<td>${inputNome.value}</td>`;
        linha +=`<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNome = '';
    inputTelefone = '';
}

function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}