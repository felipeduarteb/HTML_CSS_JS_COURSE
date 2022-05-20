var corpo = document.body;

corpo.style.background = 'red';
corpo.style.color = '#ffffffff'

document.body.style.height='600px';
document.body.style.width='600px';
document.body.style.border='solid 20px #ffffff';

var soma=12+5;

// No inner.HTML podemos mandar qualquer sintaxe HTML valida
corpo.innerHTML='<h1>DOM em JAVASCRIPT!</h1>' + soma;
// corpo.innerHTML= soma;



// onabort: ((this: Window, ev: UIEvent) => any) | null;