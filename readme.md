🏛️ Website — Stuchi & Leite

Website institucional do escritório de arquitetura Stuchi & Leite, desenvolvido com HTML, CSS e JavaScript vanilla.

---

## 👨‍💻 Desenvolvido por:

**Mateus Durães dos Santos**
[LinkedIn](https://www.linkedin.com/in/mateus-duraes-dos-santos/)

---

## 🚀 Tecnologias
- HTML5
- CSS3
- JavaScript

---

## 💻 Páginas
index.html / projetos.html / publicacoes.html

---

## 📚 Bibliotecas
Nenhuma biblioteca utilizada

## 🖥️ Execução Local (Live Server)

Este projeto utiliza JavaScript Modules (type="module"), portanto não pode ser executado corretamente abrindo os arquivos HTML diretamente no navegador.

Para executar o projeto localmente, é obrigatório utilizar um servidor local, sendo recomendado o uso da extensão Live Server do Visual Studio Code.

Importante:
O Live Server deve ser iniciado com a pasta public definida como diretório raiz do servidor.
Iniciar o servidor a partir de outra pasta pode causar erros de importação de módulos, caminhos quebrados ou falhas no carregamento de scripts.

Procedimento recomendado:

  1. Abra o projeto no Visual Studio Code

  2. Clique com o botão direito sobre a pasta public

  3. Selecione “Open with Live Server”

---

## 📁 Manutenção do Projeto

  Como adicionar e atualizar projetos na página projetos.html

  Observação: Este projeto precisa de um servidor para ser executado. Você pode utilizar a extensão "Live Server" do Visual Studio Code.

  1. **Navegue até o seguinte diretório** <br>
  assets/projetos

  2. **Adicione uma nova pasta de projeto** <br>
    Crie uma nova pasta dentro de assets/projetos e coloque todas as imagens relacionadas ao novo projeto dentro dela.
    Certifique-se de que o nome da pasta esteja consistente com as convenções de nomenclatura (por exemplo, sem espaços ou caracteres especiais).

  3. **Atualize o arquivo de dados** <br>
    Vá até: /datas/data_projects.js (Este arquivo armazena todas as informações dos projetos exibidos na página projetos.html)

  4. **Adicione ou modifique os dados do projeto** <br>
    Dentro de data_projects.js, copie a estrutura de um projeto existente e cole abaixo dos demais. Em seguida, atualize cada propriedade (como title, thumbPath, description, etc.) com os detalhes do novo projeto.

  5. **Exemplo:**
  ```js
    {
      title: "Nome do Novo Projeto",
      id: 1,
      imgSizeClass: "grid--col3",
      type: "urbanismo",
      description: "Breve resumo do projeto.",
      date: "Data do projeto",
      imagesPaths: [
        "projetos/novo_projeto/imagem_2.jpg",
        "projetos/novo_projeto/imagem_3.jpg",
        "projetos/novo_projeto/imagem_4.jpg"
      ]
    }
  ```

  6. Salve e verifique

---

## 🔥 Deploy e hospedagem

Este projeto está hospedado utilizando [🔥Firebase Hosting](https://firebase.google.com/docs/hosting) <br>

Para atualizar o projeto online usando Firebase Hosting, siga estes passos:

  1. **Certifique-se de que o Firebase CLI está instalado**
     ```bash
      npm install -g firebase-tools

  3. **Faça login na conta Firebase** <br>
      ```bash
      firebase login

  4. **Atualize seu projeto local** <br>
     Faça todas as alterações necessárias localmente (HTML, CSS, JS ou imagens) e salve.

  5. **Faça o deploy do projeto atualizado** <br>
      ```bash
      firebase deploy

  6. **Verifique online** <br>
     Após a conclusão do deploy, acesse a URL do Firebase Hosting para confirmar que as atualizações estão publicadas.
