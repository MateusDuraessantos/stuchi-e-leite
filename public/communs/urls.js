
import { openPopup } from '../components/popup.js'

export const verififyHashToOpenPopup = (data) => {
  const hash = location.hash.slice(1)

  if (!hash) return // Se não tiver hash, não continua

  const selectedProject = data.find(obj => {
    return obj.title != '' && formatText(obj.title) === hash
  })

  if(selectedProject === undefined) return // Se não encontrar o projeto, não continua

  const projetoId = Number(selectedProject.id)

  openPopup(data, projetoId)
}

export const addHashWhenOpenPopup = (selectedProject) => {
  window.location.hash = formatText(selectedProject.title)
}

const formatText = (string) => string.normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "") // remove acentos
  .toLowerCase()
  .replace(/\s+/g, "-"); // espaço -> hífen
