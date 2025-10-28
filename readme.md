# 🏛️ Website to Stuchi & Leite
Website institucional do escritório de arquitetura Stuchi & Leite, desenvolvido com HTML, CSS e JavaScript vanilla.

---

## 👨‍💻 Developer by:
**Mateus Durães dos Santos**
[LinkedIn](https://www.linkedin.com/in/mateus-dur%C3%A3es-dos-santos/)

---

## 🚀 Tecnologies
- HTML5
- CSS3
- JavaScript

---

## 💻 Pages
Home / Projetos / Publicações

---

## 📚 Libraries
No libraries used


## 📁 About the project
How to add and update projects to page projects.html
  1. **Navigate to the folowing directory**
    src/projetos

  2. **Add a new project folder**
    Create a new folder inside src/projetos and place all the images related to the new project inside it.
    Make sure the folder name is consistent with your naming conventions (e.g., no spaces or special characters).

  3. **Update the data file**
    Go to: src/datas/data_projects.js (This file stores all project information displayed on the projects.html page)

  4. **Add or modify project data**
    Inside data_projects.js, copy the estructure of a existing project and paste it below others. Then update each property (such as name, path, description, and images URLs) with the new project's details

  5. **Exemple:**
  ```js
    {
      title: "New Project Name",
      type: "urbanismo",
      thumbPath: "projetos/project_name/image_name.jpg",
      description: "Short project summary here.",
      date: "Date of project",
      imagesPaths: [
        "projetos/new_project/image_name_2.jpg",
        "projetos/new_project/image_name_3.jpg",
        "projetos/new_project/image_name_4.jpg"
      ]
    }
  ```

  6. Save and verify
