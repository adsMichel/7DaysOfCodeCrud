let button = document.getElementById('id_button');
button.addEventListener('click', cadastrar);

function cadastrar() {
    let nome = document.getElementById('id_nome');
    let nascimento = document.getElementById('id_nascimento');

    console.log(nome.value);
    console.log(nascimento.value);
}