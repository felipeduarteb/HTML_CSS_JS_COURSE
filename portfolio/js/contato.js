function contato() {
    var nome = document.querySelectorAll('#nome')[0];
    var email = document.querySelectorAll('#email')[0];
    var mensagem = document.querySelectorAll('#mensagem')[0];
    var divErro;

    if (nome.value == ''){
        divErro = document.querySelectorAll('.nome_erro')[0];
        nome.style.border = '3px solid red';
        divErro.style.display = 'block';
        divErro.innerHTML = ('Por favor, digite seu nome.');
        nome.focus();

    } else {
        nome.style.border = '1px solid white';
        document.querySelectorAll('.nome_erro')[0].style.display = 'none';
    }

    if (email.value == '' ){
        divErro = document.querySelectorAll('.email_erro')[0];
        email.style.border = '3px solid red';
        divErro.style.display = 'block';
        divErro.innerHTML = ('Por favor, digite seu email.');
        email.focus();
    } else {
        email.style.border = '1px solid white';
        document.querySelectorAll('.email_erro')[0].style.display = 'none';
    }

    if (mensagem.value == ''){
        divErro = document.querySelectorAll('.mensagem_erro')[0];
        mensagem.style.border = '3px solid red';
        divErro.style.display = 'block';
        divErro.innerHTML = ('Por favor, digite a sua mensagem.');
        mensagem.focus();
    } else {
        mensagem.style.border = '1px solid white';
        document.querySelectorAll('.mensagem_erro')[0].style.display = 'none';
    }
}