let contentBtn = document.querySelector(".content__btn");
let content = document.querySelector(".content");

contentBtn.addEventListener("click", function (){
    content.classList.toggle("content--open")
})