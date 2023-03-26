
const h1 = document.querySelector(".hello h1");

function handleTitleClick(){
    const clickedClass = "active"
    h1.classList.toggle("active");
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass)
    // }else{
    //     h1.classList.add(clickedClass)
    // }
}
h1.addEventListener("click",handleTitleClick )

const docBody = document.querySelector("body");

function changeClass() {
    let windowW = window.innerWidth;
    if(windowW < 450){
        docBody.classList.remove("purple")
        docBody.classList.remove("yellow")
        docBody.classList.add("blue")
    }else if(windowW < 800 && windowW > 450){
        docBody.classList.remove("blue")
        docBody.classList.remove("yellow")
        docBody.classList.add("purple")
    }else if (windowW > 800){
        docBody.classList.remove("blue")
        docBody.classList.remove("purple")
        docBody.classList.add("yellow")
    }
}
window.addEventListener("resize", changeClass);



