import { links } from '../constants/constants.js'

export const addHeader = () => {
  const header = document.createElement('header')
  header.innerHTML = `
    <div class="header__logo">
      <p class="header__name">STUCHI<span>&</span>LEITE</p>
      <p class="header__description">Projetos & Consultoria | Arquitetura e Desevolvimento Urbano</p>
    </div>

    <button class="header__hamburger" id="hamburger" aria-label="Menu hamburguer">
      <img width="20" width="40" src="./assets/icons/hamburger.svg" loading="lazy" alt="Menu hamburger" />
    </button>
    
    <div class="header__right" closable="true" id="id-header" aria-expanded="false">
      <button class="header__close" closable="true" aria-label="Fechar menu hamburguer">✕</button>

      <div class="header__container">
        <div class="header__links">
          <a class="header__link" data-ancor="inicio" href="./index.html#inicio">Início</a>
          <a class="header__link" data-ancor="sobre" href="./index.html#sobre">Sobre</a>
          <a class="header__link" data-ancor="contato" href="./index.html#contato">Contato</a>
          <hr>
          <a class="header__link" data-ancor="projetos" href="./projetos.html">Projetos</a>
          <a class="header__link" data-ancor="publicacoes" href="./publicacoes.html">Publicações</a>
        </div>
        <div class="header__redes">
          <a class="header__a" href="${links.urlInstagram}" target="_blank"><img src="./assets/icons/insta.svg" loading="lazy" alt="Instagram"></a>
          <a class="header__a" href="${links.urlLinkedin}" target="_blank"><img src="./assets/icons/linkedin.svg" loading="lazy" alt="LinkedIn"></a>
        </div>
      </div>
    </div>
  `

  document.getElementById('body-scroll').appendChild(header)

  const idHeader = header.querySelector('#id-header')
  const hamburger = header.querySelector('#hamburger')
  const headerLink = header.querySelectorAll('.header__link')
  let setTime = null

  const hamburgerMenu_open = () => {
    clearTimeout(setTime)
    idHeader.setAttribute('aria-expanded', 'true')
    idHeader?.classList.remove('menu--close')
    idHeader?.classList.add('menu--open')
  }

  const hamburgerMenu_close = (event) => {
    const isClosable = Boolean(event.target.getAttribute('closable'))
    if (!isClosable) return
    idHeader?.classList.add('menu--close')
    setTime = setTimeout(() => {
      idHeader.setAttribute('aria-expanded', 'false')
      idHeader?.classList.remove('menu--close')
      idHeader?.classList.remove('menu--open')
    }, 1000)
  }

  const urlParams = () => {
    setTimeout(() => {
      header.querySelector('[active]')?.removeAttribute('active')

      header.querySelector(`[data-ancor="${verifyUrl()}"]`)?.setAttribute('active', '')
    }, 0)
  }

  hamburger?.addEventListener('click', hamburgerMenu_open)
  header?.addEventListener('click', hamburgerMenu_close)
  headerLink.forEach(obj => obj.addEventListener('click', urlParams))
  urlParams()
}

const verifyUrl = () => {
  try {
    const url = window.location
    if (url.pathname.includes('publicacoes')) return 'publicacoes'
    else if (url.pathname.includes('projetos')) return 'projetos'
    else return url.hash.slice(1) || 'inicio'
  } catch (error) {
    throw new Error("Url inválido" + error);
  }
}