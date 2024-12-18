const h1 = document.querySelector(".default")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")

btn1.addEventListener("click", () => {
    h1.classList.add("blue")
})
btn2.addEventListener("click", () => {
    h1.classList.add("green")
})