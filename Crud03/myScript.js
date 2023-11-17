let button = document.getElementById('id_button');
button.addEventListener('click', cadastrar);
let form = document.getElementById('form');
let table = document.getElementById('tab_users');

form.addEventListener("submit", (event) => {
    event.preventDefault()
  })

function cadastrar() {
    let nome = document.getElementById('id_nome').value;
    let birthdate = document.getElementById('id_nascimento').value;
    let data = new Date(birthdate);
    let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    let usuario = {
        name: nome,
        dataNascimento: dataFormatada    
    }
    localStorage.setItem('user', JSON.stringify(usuario));
    let tr = document.createElement('tr');
    table.appendChild(tr);
    tr.id = 'duran';
    let trow = document.getElementById('duran');
    trow.innerHTML = `
    <td class="tdName">${JSON.parse(localStorage.getItem('user')).name}</td>
    <td class="tdBirthdate">${JSON.parse(localStorage.getItem('user')).dataNascimento}</td>`;
}
