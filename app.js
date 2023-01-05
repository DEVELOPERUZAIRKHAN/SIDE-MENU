// let content = document.createElement("p")
// content.innerHTML="This is my main para";
// let body=document.querySelector("body")
// body.appendChild(content)
// content.style.backgroundColor="blue"


// body.classList.remove("color")
// body.classList.add("color")
// body.classList.toggle("color")

// body.removeAttribute("class")


const hamburger =document.querySelector(".hamburger")
const left =document.querySelector(".left")
const right =document.querySelector(".right")
const one =document.querySelector(".bar-1")
const two =document.querySelector(".bar-2")
const three =document.querySelector(".bar-3")
// const right =document.querySelector(".right")

hamburger.addEventListener("click",function() {
    
    left.classList.toggle("left-open")
    // right.classList.toggle("right-open")
    one.classList.toggle("bar-1-change")
    two.classList.toggle("bar-2-change")
    three.classList.toggle("bar-3-change")
    right.classList.toggle("right-change")
    
})