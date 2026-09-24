<div align="center">
  <h1>Thiago Arcoverde</h1>
  <p><strong>Software Engineer</strong> · .NET · C# · Backend</p>
  <p>
    <a href="https://thiagoarcoverde.github.io/Portfolio/">Portfólio</a>
    ·
    <a href="https://github.com/ThiagoArcoverde">GitHub</a>
    ·
    <a href="https://www.linkedin.com/in/thiago-arcoverde/">LinkedIn</a>
  </p>
</div>

<br>

> Portfólio pessoal focado em engenharia de software, APIs e soluções backend confiáveis.

Construído com React e Vite, este projeto reúne experiência profissional, tecnologias, projetos, formas de contato e currículos para download em português, inglês e espanhol.

## Visão rápida

| Área | O que apresenta |
| --- | --- |
| **Experiência** | Atuação em sistemas financeiros, microsserviços, modernização e produtos de gestão. |
| **Especialidades** | .NET, C#, Node.js, React, AWS, SQL, NoSQL e Docker. |
| **Projetos** | Unirota e Homevault API, com links para os repositórios. |
| **Contato** | LinkedIn, GitHub, e-mail e currículos localizados. |

## Recursos

- Layout responsivo para desktop e dispositivos móveis.
- Carrossel horizontal em telas grandes e navegação empilhada em telas menores.
- Conteúdo localizado em português, inglês e espanhol.
- Tema claro e escuro persistido no navegador.
- Download do currículo correspondente ao idioma selecionado.
- Navegação por teclado, foco visível e estrutura semântica.

## Stack

`React 19` · `Vite` · `JavaScript` · `CSS` · `lucide-react`

## Começando

### Pré-requisitos

- Node.js 18 ou superior
- npm

### Instalar e executar

```bash
npm install
npm run dev
```

O Vite exibirá a URL local da aplicação no terminal.

### Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera o build de produção em `dist/`. |
| `npm run check` | Executa a validação de build do projeto. |
| `npm run preview` | Serve localmente o build gerado. |

## Estrutura

```text
src/
  assets/       PDFs de currículo e outros assets locais
  components/   Componentes reutilizáveis
  data/         Conteúdo localizado e dados do portfólio
  sections/     Blocos de conteúdo compostos pela página
  App.jsx       Composição e ordem das seções
  main.jsx      Inicialização do React
  style.css     Tokens, layout global e estilos responsivos
docs/
  ARCHITECTURE.md
```

O conteúdo repetível deve permanecer em `src/data/`. Componentes compartilhados ficam em `src/components/`, e blocos específicos da página ficam em `src/sections/`.

## Currículos

Os PDFs ficam em [src/assets/resume](src/assets/resume):

- `curriculo-thiago-arcoverde-pt-br.pdf`
- `curriculo-thiago-arcoverde-en.pdf`
- `curriculo-thiago-arcoverde-es.pdf`

Os arquivos e nomes usados no download são associados ao idioma em [src/data/locales.js](src/data/locales.js). Ao substituir um currículo, mantenha o nome do arquivo ou atualize a referência correspondente.

## GitHub Pages

O projeto usa a base `/Portfolio/`, definida em [vite.config.js](vite.config.js), para funcionar no GitHub Pages do repositório `Portfolio`.

Se a configuração de deploy ou o caminho base forem alterados, execute `npm run check` e confira os assets gerados em `dist/`.

## Arquitetura

Consulte [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) para conhecer as decisões de organização, acessibilidade, responsividade e limites de dependências do projeto.

