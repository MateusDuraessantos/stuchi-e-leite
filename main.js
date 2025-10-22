import { header } from './components/header.js'
import { footer } from './components/footer.js'

document.body.innerHTML += header
document.body.innerHTML += footer

const linksHeader = document.getElementById('id-header')
const secaoAtiva = document.querySelector('app-header').innerText

linksHeader.querySelectorAll('a').forEach(obj => {
  if (obj.innerText == secaoAtiva) obj.style.color = 'red'
})