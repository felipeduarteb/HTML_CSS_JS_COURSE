function cadastro () {
    var nome = document.querySelectorAll('#nome')[0];
    var endereco = document.querySelectorAll('#endereco')[0];


    //res... pq a variavel res recebeu a div com id #resultado
    var res = document.querySelectorAll('#resultado')[0];

    if (nome.value ==''){
        nome.style.border = '5px solid red';
        // coloca o cursor dentro do campo a ser preenchido
        nome.focus();
        // interrompe a execução da função daqui pra baixo
        return false;
    }

    if (endereco.value == ''){
        endereco.style.border = '5px solid red';
        endereco.focus();
        return false;
    }
    
    // alert(`Seu nome é: ${nome.value}`);
    alert(`Seu nome é: ${nome.value}`);
    res.style.display = 'block';
    res.innerHTML = nome.value + '<hr>' + endereco.value;




}
