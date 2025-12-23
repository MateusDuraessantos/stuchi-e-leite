import { loadImages } from '../main.js'
import { attributesNames } from '../constants/constants.js'

export const openPopup = (datas, event) => {
  const projetoId = Number(event.currentTarget.getAttribute(attributesNames.projectId))
  const selectedProject = datas.find(obj => obj.id === projetoId)
  
  const popup = document.createElement('div')
  const closableTag = 'closable'
  popup.classList.add('popup', 'slowFade--open')
  popup.setAttribute(closableTag, '')
  popup.id = 'popupcontent'
  popup.setAttribute('closable', 'true')

  const imagePrincipal = selectedProject.imagesPaths[0]

  const imagesTagHtml = selectedProject.imagesPaths.slice(1).map(path =>
    `<img class="popup__img" src="/assets/${path}" width="300" height="300" opentozoom loading="lazy" alt="${selectedProject.title}">`)
  .join('')

  popup.innerHTML = `
    <div class="popup__content">
      <button class="popup__close" ${closableTag}="true" aria-label="Fechar popup">✕</button>
      <div class="popup__container">
        <p class="popup__title">${selectedProject.title}</p>
        <div class="popup__descricao">${selectedProject.description}</div>
        <p class="popup__data">${selectedProject.date}</p>
      </div>

      <div class="popup__portfolio g-gap">
        <img class="popup__img popup__img--thumb" width="600" height="400" opentozoom src="/assets/${imagePrincipal}" loading="lazy" alt="${selectedProject.title}">

        <div class="popup__grid g-gap">
          ${imagesTagHtml}
        </div>
      </div>
    </div>
  `
  const zoom_popupHtml = `
    <button class="popup__close popup__close--zoom" zoom_close aria-label="Fechar popup de inspeção da imagem">✕</button>
    <img class="popup__zoom--img" loading="lazy" alt="">
  `

  document.body.append(popup)

  loadImages(popup.querySelectorAll('img'))

  // Methods
  const zoom_open = (event) => {
    const pathImg = event.currentTarget.getAttribute('src')
    const temp = document.createElement('div')
    temp.classList.add('popup__zoom', 'slowFade--open')
    temp.id = 'zoom'
    temp.innerHTML = zoom_popupHtml
    temp.querySelector('img').setAttribute('src', pathImg)
    popup.appendChild(temp)
    const closeBtn = document.querySelector('[zoom_close]')
    closeBtn.addEventListener('click', zoom_close)
    addDragAndDrop() 
  }

  const zoom_close = (event) => {
    const zoom = document.getElementById('zoom')
    if (event.target.getAttribute('zoom_close') != null) {
      zoom.classList.add('slowFade--close')
      setTimeout(() => zoom.remove(), 1000)
    }
  }

  const closePopup = (event) => {
    document.body.style.overflow = ''
    if (event == undefined || Boolean(event?.target.getAttribute(closableTag))) {
      popup.classList.remove('slowFade--open')
      popup.classList.add('slowFade--close')
      setTimeout(() => popup.remove(), 1000)
    }
  }

  const closeOnEsc = (event) => { if (event.key === 'Escape' || event.key === 'Esc') closePopup() }

  const addDragAndDrop = () => {
    const zoomContainer = document.getElementById('zoom')
    const zoomImg = zoomContainer.querySelector('img')

    let isDragging = false
    let startX = 0
    let startY = 0
    let translateX = 0
    let translateY = 0
    let scale = 1
    function applyTransform() {
      zoomImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`
    }

    zoomContainer.addEventListener('mousedown', (e) => {
      isDragging = true
      startX = e.clientX
      startY = e.clientY
      zoomImg.style.cursor = 'grabbing'
      e.preventDefault()
    })

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return

      const dx = e.clientX - startX
      const dy = e.clientY - startY

      zoomImg.style.transform = `translate(${translateX + dx}px, ${translateY + dy}px) scale(${scale})`
    })

    document.addEventListener('mouseup', (e) => {
      if (!isDragging) return
      isDragging = false
      zoomImg.style.cursor = 'grab'

      const dx = e.clientX - startX
      const dy = e.clientY - startY
      if(scale != 1) translateX += dx
      translateY += dy
      applyTransform()
    })

    zoomContainer.addEventListener('wheel', (e) => {
      const step = 0.2
      if (e.deltaY < 0) scale += step
      else if (e.deltaY > 0) scale -= step
      if (scale < 1) scale = 1
      if (scale > 5) scale = 5
      if (scale === 1) {
        translateX = 0
        translateY = 0
      }
      applyTransform()
    }, { passive: true })
    
  }

  // On Mounted
  document.querySelectorAll('[opentozoom]').forEach(obj => obj.addEventListener('click', zoom_open))
  document.addEventListener('keydown', closeOnEsc)
  popup.addEventListener('click', closePopup)
}