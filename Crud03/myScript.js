let button = document.getElementById('id_button');
button.addEventListener('click', cadastrar);
let form = document.getElementById('form');
let table = document.getElementById('id-table');

form.addEventListener("submit", (event) => {
    event.preventDefault()
  })

function cadastrar() {
    let $nome = document.getElementById('id_nome').value;
    let $nasc = document.getElementById('id_nascimento').value;
    let newNac = new Date($nasc);
    let data = newNac.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    let usuario = {
        name: $nome,
        nascimento: data  
    };

    let arrayPessoas = JSON.parse(localStorage.getItem('user')) || [];
    arrayPessoas.push(usuario);
    localStorage.setItem('user', JSON.stringify(arrayPessoas));

    let linha = document.createElement('tr');
    linha.setAttribute('id', 'id-linha');
    document.getElementById('id-table').appendChild(linha);
    linha.innerHTML = `<td>${usuario.name}</td><td>${usuario.nascimento}</td><td><button onclick="">Editar</button></td>`;
}
