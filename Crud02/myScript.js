let button = document.getElementById('id_button');
button.addEventListener('click', cadastrar);



function cadastrar() {
    let nome = document.getElementById('id_nome');
    let alfabeto = /^[A-Za-z\s]*$/;
    
    if ((nome.value.length < 3) || (nome.value.length > 120) || (!nome.value.match(alfabeto))) {
        alert('Um nome precisa ter no mínimo três letras.\nUm nome pode ter no máximo 120 letras.\nUm nome pode apenas conter letras, e não números.\nA data de nascimento precisa estar no formato DD/MM/AAAA, por exemplo: 31/01/2021.\nO mês informado deve estar entre 01 e 12.');
    }

    let nascimento = document.getElementById('id_nascimento').value;

    let formatoData=()=>{
    let dataArray = nascimento.split('-')

    let novoFormato = `${dataArray[2]}/${dataArray[1]}/${dataArray[0]}`

    alert(novoFormato)
    }

    formatoData()

}