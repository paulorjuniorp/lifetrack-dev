const organizationBtn = document.querySelector('.item__button--organization');
const perfilBtn = document.querySelector('.item__button--perfil');

document.addEventListener('DOMContentLoaded', () => {
    organizationBtn.addEventListener('click', () => {
        organizationBtn.classList.add('item__ativo');
        alterarContexto('organization');
    })
});

perfilBtn.addEventListener('click', () => {
    perfilBtn.classList.add('item__ativo');
    alterarContexto('perfil');
})


function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto);
    botoes.forEach(function(contexto) {
        contexto.classList.remove('item__ativo');
    })
}