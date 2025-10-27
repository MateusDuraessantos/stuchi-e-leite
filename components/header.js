import { links } from '../constants/constants.js'

export const addHeader = () => {
  const header = document.createElement('header')
  header.innerHTML = `
    <div class="header__logo">
      <p class="header__name">STUCHI<span>&</span>LEITE</p>
      <p class="header__description">Projetos & Consultoria | Arquitetura e Desevolvimento Urbano</p>
    </div>

    <button class="header__hamburger" id="hamburger" aria-label="Menu hamburguer">
      <img width="20" width="40" src="../src/icons/hamburger.svg" alt="Menu hamburger" />
    </button>
    
    <div class="header__right" id="id-header" aria-expanded="false">
      <button class="header__close" id="header__close" aria-label="Fechar menu hamburguer">✕</button>

      <div class="header__container">
        <div class="header__links">
          <a class="header__link" data-ancor="inicio" href="/#inicio">Início</a>
          <a class="header__link" data-ancor="sobre" href="/#sobre">Sobre</a>
          <a class="header__link" data-ancor="contato" href="/#contato">Contato</a>
          <hr>
          <a class="header__link" data-ancor="projetos" href="/projetos.html">Projetos</a>
          <a class="header__link" data-ancor="publicacoes" href="/publicacoes.html">Publicações</a>
        </div>
        <div class="header__redes">
          <a class="header__a" href="${links.urlFacebook}" target="_blank"><img src="../src/icons/face.svg" alt="Facebook"></a>
          <a class="header__a" href="${links.urlInstagram}" target="_blank"><img src="../src/icons/insta.svg" alt="Instagram"></a>
          <a class="header__a" href="${links.urlLinkedin}" target="_blank"><img src="../src/icons/linkedin.svg" alt="LinkedIn"></a>
        </div>
      </div>
    </div>
  `
  
  document.body.appendChild(header)

  const idHeader = header.querySelector('#id-header')
  const hamburger = header.querySelector('#hamburger')
  const headerClose = header.querySelector('#header__close')
  const headerLink = header.querySelectorAll('.header__link')
  let setTime = null

  const hamburgerMenu_open = () => {
    clearTimeout(setTime)
    idHeader.setAttribute('aria-expanded', 'true')
    idHeader?.classList.remove('menu--close')
    idHeader?.classList.add('menu--open')
  }

  const hamburgerMenu_close = () => {
    idHeader?.classList.add('menu--close')
    setTime = setTimeout(() => {
      idHeader.setAttribute('aria-expanded', 'false')
      idHeader?.classList.remove('menu--close')
      idHeader?.classList.remove('menu--open')
    }, 1000);
  }


  const urlParams = () => {
    setTimeout(() => {
      header.querySelector('[active]')?.removeAttribute('active')
      const url = window.location
      const param = url.hash.slice(1) || url.pathname.split('.')[0].replace('/', '') || 'inicio'
      header.querySelector(`[data-ancor="${param}"]`)?.setAttribute('active', '')
    }, 0);
  }

  
  hamburger?.addEventListener('click', hamburgerMenu_open)
  headerClose?.addEventListener('click', hamburgerMenu_close)
  headerLink.forEach(obj => obj.addEventListener('click', urlParams))
  urlParams()
}
