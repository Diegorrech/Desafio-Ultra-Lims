function buscarEndereco(){
    let cep = document.querySelector('#cep').value;


    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data);
            mostrarResultado(data)
        
          
        })
    })
    
}

function mostrarResultado(dados){
    let resultado = document.querySelector('#informacoes');

    if (dados.erro){
        resultado.innerHTML = ` <h4> ${"Cep não encontrado!"} </h4>`
    }else{

    resultado.innerHTML = `<p>Endereco: ${dados.logradouro}</p>
                            <p>Complemento: ${dados.complemento}</p>
                            <p>Cidade: ${dados.localidade}</p>
                            <p>Bairro: ${dados.bairro}</p>
                            <p>Estado: ${dados.uf}</p>`;
    }
}


buscarEndereco();
mostrarResultado(data);
