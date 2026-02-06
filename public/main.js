import { addHeader } from './components/header.js'
import { addFooter } from './components/footer.js'

document.addEventListener('DOMContentLoaded', () => {
  addHeader()
  addFooter()

  const favicon = document.createElement('link')
  favicon.setAttribute('rel', 'icon')
  favicon.setAttribute('href', '/assets/favicon.ico')
  document.head.append(favicon)
})

export const loadImages = (images) => {
  images.forEach(img => {
    img.classList.add('loading__img')
    img.addEventListener('load', (event) => {
      event.target.classList.remove('loading__img')
    })
  }) 
}
