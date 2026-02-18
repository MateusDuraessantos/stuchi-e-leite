import { links, tabsIdsSections } from '../constants/constants.js'

export const addHeader = () => {
  const header = document.createElement('header')
  header.innerHTML = `
    <div class="header__logo">
      <p class="header__name">STUCHI<span>&</span>LEITE</p>
      <p class="header__description">Projetos & Consultoria | Arquitetura e Desenvolvimento Urbano</p>
    </div>

    <button class="header__hamburger" id="hamburger" aria-label="Menu hamburguer" aria-expanded="false" aria-controls="id-header">
      <img width="20" height="20" src="/assets/icons/hamburger.svg" loading="lazy" alt="" aria-hidden="true"/>
    </button>
    
    <div class="header__right" closable="true" id="id-header" role="navigation">
      <button class="header__close" closable="true" aria-label="Fechar menu hamburguer">✕</button>

      <div class="header__container">
        <nav class="header__links">
          <a class="header__link" data-ancor="inicio" href="/#inicio" closable="true">Início</a>
          <a class="header__link" data-ancor="sobre" href="/#sobre" closable="true">Sobre</a>
          <a class="header__link" data-ancor="contato" href="/#contato" closable="true">Contato</a>
          <hr>
          <a class="header__link" data-ancor="projetos" href="/projetos.html">Projetos</a>
          <a class="header__link" data-ancor="publicacoes" href="/publicacoes.html">Publicações</a>
        </nav>
        <div class="header__redes">
          <a class="header__a" href="${links.urlInstagram}" target="_blank"><img src="/assets/icons/insta.svg" loading="lazy" alt="Instagram"></a>
          <a class="header__a" href="${links.urlLinkedin}" target="_blank"><img src="/assets/icons/linkedin.svg" loading="lazy" alt="LinkedIn"></a>
        </div>
      </div>
    </div>
  `

  document.body.appendChild(header)

  const idHeader = header.querySelector('#id-header')
  const hamburger = header.querySelector('#hamburger')
  const headerLink = header.querySelectorAll('.header__link')
  let setTime = null

  const hamburgerMenu_open = () => {
    clearTimeout(setTime)
    hamburger.setAttribute('aria-expanded', 'true')
    idHeader?.classList.remove('menu--close')
    idHeader?.classList.add('menu--open')
  }

  const hamburgerMenu_close = (event) => {
    const isClosable = Boolean(event.target.getAttribute('closable'))
    if (!isClosable) return
    idHeader?.classList.add('menu--close')
    setTime = setTimeout(() => {
      hamburger.setAttribute('aria-expanded', 'false')
      idHeader?.classList.remove('menu--close')
      idHeader?.classList.remove('menu--open')
    }, 1000)
  }


  hamburger?.addEventListener('click', hamburgerMenu_open)
  header?.addEventListener('click', hamburgerMenu_close)
  headerLink.forEach(obj => obj.addEventListener('click', urlParams(verifyUrl())))
  urlParams(verifyUrl())
}

export const urlParams = (hashValue) => {
  const header = document.querySelector('header')
  header.querySelector('[active]')?.removeAttribute('active')
  header.querySelector(`[data-ancor="${hashValue}"]`)?.setAttribute('active', '')
  setTimeout(() => {
  }, 0)
}

const verifyUrl = () => {
  try {
    if (location.pathname.includes('publicacoes')) return 'publicacoes'
    else if (location.pathname.includes('projetos')) return 'projetos'
    else {
      const isValidTabSection = tabsIdsSections.some(elem => elem === location.hash.slice(1))
      if (isValidTabSection) return 'sobre'
      return location.hash.slice(1) || 'inicio'
    }
  } catch (error) {
    throw new Error("Url inválido" + error);
  }
}
