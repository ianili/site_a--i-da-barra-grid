
const menuLateral = document.querySelector('.menu-lateral');
const botaoMenu = document.querySelector('.botao-menu');
const mediaQuery = window.matchMedia("(max-width: 768px)"); // media query para tela com largura maxima de 768px //

// quando a tela diminuir, o botao menu vai aparecer, e ao clicar o menu lateral aparece //

botaoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo');
    botaoMenu.classList.toggle('ativo');
    background.classList.toggle('ativo'); 
})

if (mediaQuery.matches) {
    console.log('Tela Pequena!!!');
} else {
    console.log('Tela Grande!!!');
}

function telaMudar(e) {
    if (e.matches) {
        console.log('Tela Pequena Ativada!');
        botaoMenu.style.display = "flex";
        menuLateral.style.visibility = "visible";
    } else {
        console.log('Tela Grande Ativada!');
        botaoMenu.style.display = "none";
        menuLateral.style.visibility = "hidden";
    }
}

mediaQuery.addEventListener('change', telaMudar);

telaMudar(mediaQuery)
