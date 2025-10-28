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
index.html / projects.html / publications.html

---

## 📚 Libraries
No libraries used

---
## 🔥 Project Online
This project is been hosting with 🔥Firebase Hosting <br>
To update the project online using **Firebase Hosting**, follow these steps:
  1. **Make sure you have Firebase CLI installed**
     ```bash
     npm install -g firebase-tools
  2. **Log in to Firebase account** <br>
      ```bash
      firebase login
  
  3. **Update your local project** <br>
     Make all necessary changes locally (HTML, CSS, JS, or image updates) and save them.
  
  4. **Deploy the updated project** <br>
     ```bash
     firebase deploy
  
  5. **Verify online** <br>
     Once the deployment is complete, visit your Firebase Hosting URL to confirm the updates are live.

---

## 📁 About the project

How to add and update projects to page projects.html

  Note: This project need a server to run. You can use the Visual Studio code "live server" extension.

  1. **Navigate to the folowing directory** <br>
    src/projetos

  2. **Add a new project folder** <br>
    Create a new folder inside src/projetos and place all the images related to the new project inside it.
    Make sure the folder name is consistent with your naming conventions (e.g., no spaces or special characters).

  3. **Update the data file** <br>
    Go to: src/datas/data_projects.js (This file stores all project information displayed on the projects.html page)

  4. **Add or modify project data** <br>
    Inside data_projects.js, copy the estructure of a existing project and paste it below others. Then update each property (such as title, thumbPath, description, etc.) with the new project's details

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
