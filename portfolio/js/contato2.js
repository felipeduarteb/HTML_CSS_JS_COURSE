////////////////////////////////////////////////////////////////
/// adiciona uma classe a um elemento.                      ////
/// variavel.classList.add('nome da classe que quer adicionar')/
////////////////////////////////////////////////////////////////

function verificar() {
    var divErro = document.querySelectorAll('.erro');
    var inp = document.querySelectorAll('#inp');
    // variavel de controle para o focus
    var b=0;
    // variaveis validação email
    var cAnd = true;
    var cPon = false;
    var cont = 0;
    ///////////////////////////////
    // percorre o vetor de inpults 
    for (var i = 0; i < inp.length; i++){
        if (inp[i].value == ''){
            inp[i].style.border = 'solid 3px red';
            divErro[i].style.display = 'block';
            divErro[i].innerHTML = ('Esse campo não pode estar vazio.');
            inp[b].focus();
            cAnd = false;
        } else {
            inp[i].style.border = '1px solid white';
            divErro[i].style.display = 'none';
            b++;
            ////////////////////////////////
            /// condição para validar o e-mail
            // if (i == 1 && inp[i].value != ''){
                // var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            //     // var check = inp[i].value;
            //     // regex(check);
                // if (regex.test(inp[i].value) == false){
            //         if(!regex.test(inp[i].value)){
                    // alert();
            //     }
            //     for (var c = 0; c < check.length; c++){
            //         if (check[c] == '@' && check.length > inp.length +3){
            //                 cAnd = true;
            //                 cont++;
            //         } 
            //         if (check[c] == '.' && check.length < 100){
            //             cPon = true;
            //         }
            //     }
            //         if (cAnd == false || cPon == false || cont > 1){
            //             divErro[i].style.display = 'block';
            //             inp[i].style.border = 'solid 3px red';
            //             divErro[i].innerHTML = ('Digite um endereço de e-mail válido.');
            //             inp[i].focus();
            //     }
            // } else {
            //     b++;
            // }
        }
        
    }
    return cAnd;

    //tem que retornar via onsubmit false ou true para a pagina validar
}