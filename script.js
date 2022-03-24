const input = document.querySelector('.cep');
const button = document.querySelector('.btn')

const generateAdress = async (event) => {
    event.preventDefault();

    try {
        const api = await fetch(`https://viacep.com.br/ws/${input.value}/json/`)

        const data = await api.json();

        document.querySelector('.endereco').innerText = data.logradouro
        document.querySelector('.bairro').innerText = data.bairro
        document.querySelector('.estado').innerText = `${data.localidade} - ${data.uf}`

        input.value = "";

    }

    catch (erro) {
        input.value = "";
        alert('Valor não correspondente')
    }
}   

button.addEventListener('click', generateAdress)