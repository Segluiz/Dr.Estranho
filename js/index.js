const botaolinks = document.querySelector(".linhas");

const links = document.querySelector(".links");

botaolinks.addEventListener("click",()=>{
    links.classList.toggle('active')
})