import { links } from '../constants/constants.js'

export const addFooter = () => {
  const footer = document.createElement('footer')
  footer.setAttribute('class', 'max__width')
  footer.id = 'contato'
  
  footer.innerHTML = `
    <div class="footer__col">
      <p class="footer__title">Escritório</p>
      <p class="footer__info">Rua Marquês de Itu, 837, cj.11, Higienópolis <br> São Paulo - SP</p>
    </div>
    <div class="footer__col">
      <p class="footer__title">Telefone</p>
      <p class="footer__info">+55 (11) 2589-8019</p>
    </div>
    <div class="footer__col">
      <p class="footer__title">Email</p>
      <p class="footer__info">comunicacao@stuchileite.com</p>
    </div>
    <div class="footer__col">
      <a class="footer__title footer__title--link" href="${links.urlLinkedin}" target="_blank">Linkedin</a>
      <a class="footer__title footer__title--link" href="${links.urlInstagram}" target="_blank">Instagram</a>
    </div>
  `

  document.getElementById('body-scroll').appendChild(footer)
}