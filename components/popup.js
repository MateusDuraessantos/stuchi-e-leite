export const abrirPopup = (dados, event) => {
  const index = Number(event.currentTarget.getAttribute('index'))
  const selectProject = dados[index]
  const popup = document.createElement('div')
  const closableTag = 'closable'

  popup.classList.add('popup', 'slowFade--open')
  popup.setAttribute(closableTag, '')
  
  const htmlImagens = selectProject.imagesPaths.map(obj =>
    `<img class="popup__img" src="../src/${obj}" alt="">`)
  .join('')

  popup.innerHTML = `
    <div class="popup__content">
      <button class="popup__close" ${closableTag}>✕</button>
      <div class="popup__container">
        <p class="popup__title">${selectProject.title}</p>
        <p class="popup__descricao">${selectProject.description}</p>
        <p class="popup__data">${selectProject.date}</p>
      </div>

      <div class="popup__portfolio g-gap">
        <img class="popup__img popup__img--thumb" src="../src/${selectProject.thumbPath}" alt="">

        <div class="popup__grid">
          ${htmlImagens}
        </div>
      </div>
    </div>
  `

  document.body.append(popup)
  document.body.classList.add('body__scroll')
  popup.addEventListener('click', closePopup)
  
  function closePopup(event) {
    document.body.classList.remove('body__scroll')
    document.body.style.overflow = ''
    if (event.target.getAttribute(closableTag) == null) return
    popup.classList.remove('slowFade--open')
    popup.classList.add('slowFade--close')
    setTimeout(() => popup.remove(), 1000);
  }
}