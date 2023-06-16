function HomeButtonClick(isStartup = false){
    if(isStartup == false)
        new Audio('./public/sound/ClickSound.mp3').play()
    var box = document.getElementById("content")
    box.innerHTML=""

    var profileDiv = document.createElement("div")
    profileDiv.classList.add("profileDiv")
    profileDiv.style.height = box.style.height
    profileDiv.style.width = box.style.width

    var name = document.createElement("label")
    name.classList.add("name-gradient")
    name.textContent = 'Thiago Arcoverde!'

    var nameDescription = document.createElement("label")
    nameDescription.classList.add("nameDescription")
    nameDescription.textContent = "Olá, eu me chamo"

    var cargoDescription = document.createElement("label")
    cargoDescription.classList.add("nameDescription")
    cargoDescription.innerHTML = "Sou engenheiro de software com  <br> experiência em desenvolvimento para <br> desktop com .NET e C#"

    var profileImage = document.createElement('img')
    profileImage.classList.add("profilePicture")
    profileImage.src = './public/img/profilePicture.jpg'

    profileDiv.appendChild(nameDescription)
    profileDiv.appendChild(name)
    profileDiv.appendChild(document.createElement('br'))
    profileDiv.appendChild(cargoDescription)
    profileDiv.appendChild(profileImage)

    box.appendChild(profileDiv)
}

function CurriculumClick(){
    new Audio('./public/sound/ClickSound.mp3').play()
    var box = document.getElementById("content")
    box.innerHTML=""

    var curriculumDiv = document.createElement("div")
    curriculumDiv.classList.add("profileDiv")
    curriculumDiv.style.height = box.style.height
    curriculumDiv.style.width = box.style.width

    var lista = document.createElement("ul")
    lista.classList.add('listaCurriculo')

    var ex1 = document.createElement("li")
    ex1.innerText = "Formação em engenharia de software"
    ex1.classList.add('listaCurriculoItem')

    var ex2 = document.createElement("li")
    ex2.innerText = "Experiência como desenvolvedor desktop fullstack"
    ex2.classList.add('listaCurriculoItem')
    
    var ex3 = document.createElement("li")
    ex3.innerText = "Experiência com programação orientada a objetos"
    ex3.classList.add('listaCurriculoItem')

    var ex4 = document.createElement("li")
    ex4.innerText = "Experiência com banco de dados relacionais"
    ex4.classList.add('listaCurriculoItem')

    var ex5 = document.createElement("li")
    ex5.innerText = "Experiência com versionamento(GIT e Tortoise)"
    ex5.classList.add('listaCurriculoItem')

    var ex6 = document.createElement("li")
    ex6.innerText = "Inglês e espanhol fluente"
    ex6.classList.add('listaCurriculoItem')

    lista.appendChild(ex1)
    lista.appendChild(ex2)
    lista.appendChild(ex3)
    lista.appendChild(ex4)
    lista.appendChild(ex5)
    lista.appendChild(ex6)

    curriculumDiv.appendChild(lista)

    var link = document.createElement("a")
    link.classList.add("curriculoButton")
    link.href = '../public/documents/Curriculo.pdf'
    link.innerHTML = "Curriculo completo"

    curriculumDiv.appendChild(link)
    box.appendChild(curriculumDiv)
}

function AboutMeClick(){
    new Audio('./public/sound/ClickSound.mp3').play()
    var box = document.getElementById("content")
    box.innerHTML=""

    var aboutMeDiv = document.createElement("div")
    aboutMeDiv.classList.add("aboutMeDiv")
    aboutMeDiv.style.height = box.style.height
    aboutMeDiv.style.width = box.style.width

    var desc = document.createElement("label")
    desc.classList.add("myDescription")
    desc.innerText = "Nascido no dia 27/01/2003, me chamo Thiago Arcoverde e tenho 20 anos. Desde pequeno sou apaixonado pelo desconhecido, sempre gostei" +
    " de explorar coisas novas, e junto com os jogos que jogo desde criança, surgiu o meu amor pela computação. Sou uma pessoa com facilidade de" +
    " aprender e com uma boa capacidade analítica, consigo trabalhar bem em equipe e gosto bastante de aprender e desenvolver novas tecnologias."

    var desc2 = document.createElement("label")
    desc2.classList.add("myDescription")
    desc2.innerText = "Minha motivação é evoluir e conseguir realizar atividades da melhor forma possível através da aplicação de metodologias" +
    " e técnicas diferentes, acredito que com bastante esforço e prática é possível cada dia se tornar um dev melhor."

    aboutMeDiv.appendChild(desc)
    aboutMeDiv.appendChild(desc2)
    box.appendChild(aboutMeDiv)
}

function TecnologiesClick(){
    new Audio('./public/sound/ClickSound.mp3').play()
    var box = document.getElementById("content")
    box.innerHTML=""

    var tecnologiesDiv = document.createElement("div")
    tecnologiesDiv.classList.add("profileDiv")
    tecnologiesDiv.style.height = box.style.height
    tecnologiesDiv.style.width = box.style.width

    var lista = document.createElement("ul")
    lista.classList.add('listaCurriculo')

    var cSharp = document.createElement("li")
    cSharp.innerText = ".NET C#"
    cSharp.classList.add("listaCurriculoItem")

    var sql = document.createElement("li")
    sql.innerText = "Banco de Dados - SQL"
    sql.classList.add("listaCurriculoItem")

    var jsts = document.createElement("li")
    jsts.innerText = "Javasript / Typescript"
    jsts.classList.add("listaCurriculoItem")

    var htmlCss = document.createElement("li")
    htmlCss.innerText = "HTML / CSS"
    htmlCss.classList.add("listaCurriculoItem")

    var git = document.createElement("li")
    git.innerText = "Versionamento - Git / Github"
    git.classList.add("listaCurriculoItem")

    var agile = document.createElement("li")
    agile.innerText = "Metodologias ágeis - Daily / Kanban / Planning"
    agile.classList.add("listaCurriculoItem")

    var nodejs = document.createElement("li")
    nodejs.innerText = "NodeJS"
    nodejs.classList.add("listaCurriculoItem")

    lista.appendChild(agile)
    lista.appendChild(git)
    lista.appendChild(sql)
    lista.appendChild(jsts)
    lista.appendChild(htmlCss)
    lista.appendChild(nodejs)
    lista.appendChild(cSharp)

    tecnologiesDiv.appendChild(lista)
    box.appendChild(tecnologiesDiv)
}

function ProjectsClick(){
    new Audio('./public/sound/ClickSound.mp3').play()
    var box = document.getElementById("content")
    box.innerHTML=""

    var projectsDiv = document.createElement("div")
    projectsDiv.classList.add("projectsDiv")
    projectsDiv.style.height = box.style.height
    projectsDiv.style.width = box.style.width

    var pokeAPIDiv = document.createElement("div")
    pokeAPIDiv.classList.add("projectItemDiv")

    var pokeAPITitle = document.createElement("label")
    pokeAPITitle.classList.add("projectitem")
    pokeAPITitle.classList.add("projectItemTitle")
    pokeAPITitle.innerHTML = "PokeAPI"
    pokeAPIDiv.appendChild(pokeAPITitle)

    var pokeAPIDesc = document.createElement("label")
    pokeAPIDesc.classList.add("projectitem")
    pokeAPIDesc.classList.add("projectItemDescription")
    pokeAPIDesc.innerHTML = "<br>O projeto de PokeAPI é uma REST API que disponibiliza informações tratadas que são originalmente obtidas pela POKEAPI."
    + "A API foi desenvolvida usando as tecnologias como NodeJS, Javascript/Typescript, Express e Mongoose(MongoDB)."
    pokeAPIDiv.appendChild(pokeAPIDesc)

    projectsDiv.appendChild(pokeAPIDiv)


    
    var searchAPIDiv = document.createElement("div")
    searchAPIDiv.classList.add("projectItemDiv")

    var searchAPIDivTitle = document.createElement("label")
    searchAPIDivTitle.classList.add("projectitem")
    searchAPIDivTitle.classList.add("projectItemTitle")
    searchAPIDivTitle.innerHTML = "SearchAPI"
    searchAPIDiv.appendChild(searchAPIDivTitle)

    var searchAPIDesc = document.createElement("label")
    searchAPIDesc.classList.add("projectitem")
    searchAPIDesc.classList.add("projectItemDescription")
    searchAPIDesc.innerHTML = "<br>O projeto SearchAPI é uma API de busca que obtem uma busca do google atraves de web scrapping."
    + "Essas informações são tratadas e enviadas ao usuario em uma interface feita com JS e Bootstrap."
    + "O backend da API foi desenvolvido usando apenas C#. A ideia dessa API é não utilizar nenhuma tecnologia externa(Libs ou Frameworks) para"
    + "desenvolver sua logica de web scrapping e obter os resultados."
    searchAPIDiv.appendChild(searchAPIDesc)

    projectsDiv.appendChild(searchAPIDiv)

    box.appendChild(projectsDiv)
}

function ContactClick(){
    new Audio('./public/sound/ClickSound.mp3').play()
    var box = document.getElementById("content")
    box.innerHTML = ""

    var contactDiv = document.createElement("div")
    contactDiv.classList.add("contactDiv")
    contactDiv.style.height = box.style.height
    contactDiv.style.width = box.style.width

    var githubImage = document.createElement("img")
    githubImage.classList.add("contactPictures")
    githubImage.src = './public/img/githubLogo.png'
    githubImage.addEventListener("click", function(){
        window.location.href = 'https://github.com/ThiagoArcoverde'
    })
    githubImage.title = "Github"
    githubImage.alt = "Github"

    var linkedinImage =document.createElement("img")
    linkedinImage.classList.add("contactPictures")
    linkedinImage.src = './public/img/linkedinLogo.png'
    linkedinImage.addEventListener("click", function(){
        window.location.href = 'https://www.linkedin.com/in/thiago-arcoverde-912095203/'
    })
    linkedinImage.title = "LinkedIn"
    linkedinImage.alt = "LinkedIn"

    contactDiv.appendChild(githubImage)
    contactDiv.appendChild(linkedinImage)
    box.appendChild(contactDiv)
}