import { projetos } from '../dados/dados_projetos.js';

export const abrirPopup = (event) => {
  const index = Number(event.currentTarget.getAttribute('index'))
  const projetoSelecionado = projetos[index]
  const popup = document.createElement('div')
  popup.classList.add('popup', 'slowFade--open')

  const htmlImagens = projetoSelecionado.imagensPaths.map(obj =>
    `<img class="popup__img" src="../src/projetos/${obj}" alt="">`)
  .join('')

  popup.innerHTML = `
    <div class="popup__content">
      <button class="popup__close">✕</button>
      <div class="popup__container">
        <p class="popup__title">${projetoSelecionado.nome}</p>
        <p class="popup__descricao">${projetoSelecionado.descricao}</p>
        <p class="popup__data">${projetoSelecionado.data}</p>
      </div>

      <div class="popup__portfolio g-gap">
        <img class="popup__img popup__img--thumb" src="../src/projetos/${projetoSelecionado.thumbPath}" alt="">

        <div class="popup__grid">
          ${htmlImagens}
        </div>
      </div>
    </div>
  `

  document.body.append(popup)

  const close = popup.querySelector('.popup__close');
  close.addEventListener('click', () => {
    popup.classList.remove('slowFade--open')
    popup.classList.add('slowFade--close')
    setTimeout(() => popup.remove(), 1000);
  });

}