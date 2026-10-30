# 🌐 Projeto Acadêmico — Interfaces Web I (Etec)

> **Instituição:** Centro Paula Souza — Etec  
> **Curso:** Técnico em Informática para Internet  
> **Disciplina:** Interfaces Web I  
> **Aluno:** Renato Barbosa Aranega  
> **GitHub:** [github.com/Renato-Aranega](https://github.com/Renato-Aranega)  
> **LinkedIn:** [linkedin.com/in/renato-aranega](https://www.linkedin.com/in/renato-aranega/)  
> **Tema:** Website Estático Multilink com Alternador de Tema Escuro/Claro e Persistência  

---

## 📖 Visão Geral do Projeto

Este projeto consiste em uma aplicação web estática multiplataforma composta por **3 páginas interligadas**, desenvolvida com **HTML5 semântico**, **CSS3 moderno** e **JavaScript Vanilla (puro)**. O site apresenta o perfil do estudante, sua rotina disciplinada entre as artes marciais (Muay Thai) e a paixão por tecnologia, além de suas metas e sonhos de viagens internacionais.

O projeto foi concebido para atender a todos os padrões de qualidade, acessibilidade visual e estrutural, além de ser 100% compatível com a hospedagem contínua no **GitHub Pages**.

---

## 🗂️ Estrutura de Arquivos

```text
Projeto Etec/
├── index.html           # Página 1: Sobre Mim (Apresentação, Biografia e Competências)
├── curiosidades.html    # Página 2: Curiosidades & Rotina (Muay Thai, Estudos Tech e Hobbies)
├── lugares.html         # Página 3: Destinos dos Sonhos (Tailândia e Estados Unidos)
├── style.css            # Folha de estilos unificada (CSS Custom Properties e Flexbox)
├── script.js            # Lógica do alternador de tema e persistência via localStorage
└── README.md            # Documentação técnica, requisitos e guia de deploy
```

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

| Ferramenta / Tecnologia | Finalidade no Projeto |
| :--- | :--- |
| **HTML5 Semântico** | Marcação estruturada e acessível (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). |
| **CSS3 Moderno** | Layout flexível via Flexbox, variáveis nativas (CSS Custom Properties) e transições visuais suaves. |
| **JavaScript (Vanilla)** | Manipulação do Document Object Model (DOM) e persistência de dados no `localStorage`. |
| **React** | Biblioteca moderna para componentização de interfaces interativas e reativas. |
| **Node.js** | Ecossistema e runtime JavaScript para construção de APIs e soluções back-end escaláveis. |
| **Visual Studio Code** | Ambiente de desenvolvimento integrado (IDE) para edição e organização de código. |
| **Git & GitHub** | Controle de versionamento de código-fonte, fluxo com branches e colaboração em nuvem. |
| **GitHub Pages** | Servidor de hospedagem estática global para publicação e demonstração online. |

---

## 💻 Requisitos Recomendados do Sistema (VS Code)

Para garantir uma experiência de desenvolvimento fluida no **Visual Studio Code** e execução ideal do projeto, os seguintes requisitos são recomendados:

| Componente | Especificação Mínima Recomendada |
| :--- | :--- |
| **Sistema Operacional** | Windows 10 ou 11 (64 bits) ou macOS 10.15 (Catalina) ou superior / Linux Ubuntu 20.04+ |
| **Processador (CPU)** | Intel Core i3 (ou equivalente AMD Ryzen 3 / Apple Silicon) ou superior |
| **Memória RAM** | 4 GB ou mais (8 GB recomendados para multitarefas e abas do navegador) |
| **Armazenamento** | SSD de 128 GB com pelo menos 1 GB livre para arquivos e extensões |
| **Navegador Web** | Google Chrome, Mozilla Firefox, Microsoft Edge ou Brave atualizados |

---

## 🚀 Como Executar o Projeto Localmente

A forma mais simples e recomendada para testar o projeto no VS Code é através da extensão **Live Server**:

1. Abra o **Visual Studio Code**.
2. Clique no ícone de **Extensões** na barra lateral esquerda (`Ctrl + Shift + X`).
3. Pesquise por **Live Server** (desenvolvida por *Ritwick Dey*) e clique em **Instalar**.
4. Abra a pasta do projeto no VS Code (`Arquivo > Abrir Pasta...`).
5. Clique com o botão direito sobre o arquivo `index.html` e selecione **"Open with Live Server"** (ou clique em **"Go Live"** no rodapé inferior direito do VS Code).
6. O navegador abrirá automaticamente no endereço `http://127.0.0.1:5500/index.html`.

---

## 🌍 Guia de Publicação no GitHub Pages

Para publicar este site e disponibilizá-lo gratuitamente na internet via **GitHub Pages**, siga o passo a passo pelo terminal:

### 1. Criar o Repositório no GitHub
1. Acesse o [GitHub](https://github.com) e crie um novo repositório (ex.: `projeto-etec-interfaces`).
2. Mantenha o repositório como **Público** e **não** adicione arquivos README ou .gitignore automáticos durante a criação.

### 2. Comandos Git no Terminal (VS Code ou PowerShell)
Abra o terminal integrado na pasta do projeto e execute os comandos em sequência:

```bash
# 1. Inicializa o repositório Git local
git init

# 2. Adiciona todos os arquivos ao controle de versão
git add .

# 3. Registra o primeiro commit
git commit -m "feat: entrega do trabalho pratico de Interfaces Web I"

# 4. Renomeia a ramificação principal para main
git branch -M main

# 5. Vincula o repositório local ao seu repositório no GitHub
git remote add origin https://github.com/Renato-Aranega/projeto-etec-interfaces.git

# 6. Envia os arquivos para o GitHub
git push -u origin main
```

### 3. Ativar o GitHub Pages no Repositório
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, selecione a seção **Pages** (em *Code and automation*).
3. Na seção **Build and deployment**:
   - **Source:** selecione `Deploy from a branch`.
   - **Branch:** escolha a ramificação `main` e a pasta `/ (root)`.
4. Clique no botão **Save**.
5. Aguarde cerca de 1 a 2 minutos. O GitHub gerará o link oficial do seu site, no formato:
   `https://renato-aranega.github.io/projeto-etec-interfaces/`

---

## 🎨 Destaques de Implementação

- **Dark / Light Mode 100% Persistente:** O tema inicial é o Escuro (`--cor-fundo: #0f172a`). Ao alternar para o Modo Claro, a classe `.modo-claro` é aplicada e o estado é salvo no `localStorage`, preservando a escolha em todas as 3 páginas.
- **Nomenclatura 100% em Português:** Variáveis CSS (`--cor-fundo`, `--cor-cartao`, `--cor-destaque`, etc.), funções (`alternarTema()`, `carregarTemaSalvo()`), classes e IDs foram escritos integralmente em português.
- **Acessibilidade e Semântica:** Uso rigoroso de elementos HTML5, atributos `aria-label`, foco acessível em botões e links, além de contraste balanceado em conformidade com as diretrizes WCAG.
