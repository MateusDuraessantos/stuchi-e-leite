export const abrirPopup = (dados, event) => {
  const index = Number(event.currentTarget.getAttribute('index'))
  const selectProject = dados[index]
  const popup = document.createElement('div')
  const closableTag = 'closable'

  popup.classList.add('popup', 'slowFade--open')
  popup.setAttribute(closableTag, '')
  
  const htmlImagens = selectProject.imagesPaths.map(obj =>
    `<img class="popup__img" src="../src/${obj}" opentozoom alt="">`)
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
        <img class="popup__img popup__img--thumb" opentozoom src="../src/${selectProject.thumbPath}" alt="">

        <div class="popup__grid">
          ${htmlImagens}
        </div>
      </div>
    </div>
  `
  const popupSecundario = `
    <div class="popup__zoom slowFade--open" id="zoom">
      <button class="popup__close popup__close--zoom" closeZoom>✕</button>
      <img class="popup__zoom--img" alt="">
    </div>
  `

  document.body.append(popup)
  addBlockBodyScroll()
  popup.addEventListener('click', closePopup)
  
  document.querySelectorAll('[opentozoom]').forEach(obj => obj.addEventListener('click', openZoom))

  function openZoom(event) {
    const pathImg = event.currentTarget.getAttribute('src')
    const temp = document.createElement('div');
    temp.innerHTML = popupSecundario.trim()
    temp.querySelector('img').setAttribute('src', pathImg);
    popup.appendChild(temp)
    const closeBtn = document.querySelector('[closeZoom]')
    closeBtn.addEventListener('click', closeZoom);
    addDragAndDrop() 
  }


  function addBlockBodyScroll() {
    document.body.classList.add('body__scroll')
  }

  function removeBlockBodyScroll() {
    document.body.classList.remove('body__scroll')
  }

  function closeZoom(e)  {
    const zoom = document.getElementById('zoom')
    if (e.target.getAttribute('closeZoom') != null) {
      zoom.classList.add('slowFade--close');
      setTimeout(() => zoom.remove(), 1000);
    }
  }

  function closePopup(event) {
    document.body.style.overflow = ''
    if (event.target.getAttribute(closableTag) == null) return
    removeBlockBodyScroll()
    popup.classList.remove('slowFade--open')
    popup.classList.add('slowFade--close')
    setTimeout(() => popup.remove(), 1000);
  }

  function addDragAndDrop() {
    addBlockBodyScroll()
    const zoomContainer = document.getElementById('zoom');
    const zoomImg = zoomContainer.querySelector('img')

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let translateX = 0;
    let translateY = 0;
    let scale = 1;
    function applyTransform() {
      zoomImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    zoomContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      zoomImg.style.cursor = 'grabbing';
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      zoomImg.style.transform = `translate(${translateX + dx}px, ${translateY + dy}px) scale(${scale})`;
    });

    document.addEventListener('mouseup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      zoomImg.style.cursor = 'grab';

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if(scale != 1) translateX += dx;
      translateY += dy;
      applyTransform();
    });

    zoomContainer.addEventListener('wheel', (e) => {
      const step = 0.2;
      if (e.deltaY < 0) scale += step
      else if (e.deltaY > 0) scale -= step
      if (scale < 1) scale = 1;
      if (scale > 5) scale = 5;
      if (scale == 1) {
        translateX = 0
        translateY = 0
      }
      applyTransform();
    }, { passive: true });
    
  }

}