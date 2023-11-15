let button = document.getElementById('id_button');
button.addEventListener('click', cadastrar);

function cadastrar() {
    let nome = document.getElementById('id_nome');
    let nascimento = document.getElementById('id_nascimento');
    let alfabeto = /^[A-Za-z\s]*$/;

    if ((nome.value.length < 3) || (nome.value.length > 120)) {
        alert('Nome não permitido');
    } else if (!nome.value.match(alfabeto)) {
        alert('Somente letras');
    }
    console.log(nome.value);
    console.log(nascimento.value);
}