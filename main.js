import { header } from './components/header.js'
import { footer } from './components/footer.js'

document.body.innerHTML += header
document.body.innerHTML += footer

const linksHeader = document.getElementById('id-header')
const secaoAtiva = document.querySelector('app-header').innerText
const hamburger = document.getElementById('hamburger')
const headerClose = document.getElementById('header__close')
let handleMenu = false

const handleMenuFunc = () => {
  handleMenu = !handleMenu
  if (handleMenu) linksHeader.classList.add('menu--open')
  else linksHeader.classList.remove('menu--open')
}

hamburger.addEventListener('click', handleMenuFunc)
headerClose.addEventListener('click', handleMenuFunc)

linksHeader.querySelectorAll('a').forEach(obj => {
  if (obj.innerText == secaoAtiva) obj.style.color = 'red'
})