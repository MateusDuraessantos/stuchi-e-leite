import { links } from '../constants/constants.js'

export const footer = `
<footer>
  <div class="footer__col">
    <p class="footer__title">Telefone</p>
    <p class="footer__info">+55 (11) 2589-8019</p>
  </div>
  <div class="footer__col">
    <p class="footer__title">Escritório</p>
    <p class="footer__info">Rua Marquês de Itu, 837, cj. 11, Higienópolis | São Paulo - SP</p>
  </div>
  <div class="footer__col">
    <p class="footer__title">Email</p>
    <p class="footer__info">comunicacao@stuchileite.com</p>
  </div>
  <div class="footer__col">
    <a class="footer__title" href="${links.urlLinkedin}" target="_blank">Linkedin</a>
    <a class="footer__title" href="${links.urlInstagram}" target="_blank">Instagram</a>
  </div>
</footer>
`