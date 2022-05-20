// Antigamente faziamos assim:
// document.getElementsByTagName : busca elem pelo nome da tag
// document.getElementsByClassName : busca elem pelo nome do class
// document.getElementById : busca elem pelo nome do ID

// a forma atual e mais fácil
// usamos dentro dos () a mesma sintaxe de seletores CSS

console.log (document.querySelectorAll('h1, p'));
var elementos = document.querySelectorAll('p');

for (var i=0; i < elementos.length; i++){
    elementos[i].style.color = 'red';
}

document.querySelectorAll('p')[3].style.color = 'black';


var destaques = document.querySelectorAll('.destaque');

for (i=0; 1<elementos.length; i++) {
    destaques[i].style.color = 'yellow';
}
