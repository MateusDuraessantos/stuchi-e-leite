import { header } from './components/header.js'
import { footer } from './components/footer.js'

document.body.innerHTML += header
document.body.innerHTML += footer

const linksHeader = document.getElementById('id-header')
const secaoAtiva = document.querySelector('app-header').innerText
const hamburger = document.getElementById('hamburger')
const headerClose = document.getElementById('header__close')
let handleMenu = false
let setTime = null

const handleMenuFunc = () => {
  handleMenu = !handleMenu

  clearTimeout(setTime)
  if (handleMenu) {
    linksHeader.classList.remove('menu--close')
    linksHeader.classList.add('menu--open')
  }
  else {
    linksHeader.classList.add('menu--close')
    setTime = setTimeout(() => {
      linksHeader.classList.remove('menu--close')
      linksHeader.classList.remove('menu--open')
    }, 1000);
  }
}

hamburger.addEventListener('click', handleMenuFunc)
headerClose.addEventListener('click', handleMenuFunc)

linksHeader.querySelectorAll('a').forEach(obj => {
  if (obj.innerText == secaoAtiva) obj.style.color = 'red'
})