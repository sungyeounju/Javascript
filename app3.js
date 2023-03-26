// const age = 33;
// function calc(agek){
//     return agek + 2;
// }
// const krAge = calc(age);
// console.log(krAge)

// const age = parseInt(prompt('how old are you'));

//console.log(isNaN(age))

// if(isNaN(age)){
//     console.log('숫자를 입력하세용')
// } else if(age < 18){
//     console.log('넘 어려')
// } else if(age >=18 && age <=50){
//     console.log('술삽가능')
// } else{
//     console.log('술살수있음')
// }

// const title = document.getElementById("title");
// console.dir(title)
// title.innerText = 'ffffffff';

// const hello = document.getElementsByClassName("hello")

const h1 = document.querySelector(".hello h1");

function handleTitleClick(){
    const currentColor = h1.style.color
    let newColor;
    if(currentColor === 'blue'){
        newColor = 'tomato'
    } else{
        newColor = 'blue'
    }
    h1.style.color = newColor;
}
h1.addEventListener("click",handleTitleClick )
// function handleMouseEnter(){
//     title.innerText = 'mouse is here~~~~~'
// }
// function handleMouseLeave(){
//     title.innerText = 'leavvvvvvvv'
// }
// function handleWindowResize(){
//     document.body.style.backgroundColor = 'tomato'
// }
// function handleWindowCopy(){
//     alert("copyyyyyyyy")
// }
// function offLinedd(){
//     alert("no wifffffffi")
// }
// function onLinedd(){
//     alert("goooodddddddd")
// }

// title.addEventListener("mouseenter",handleMouseEnter)
// title.addEventListener("mouseleave",handleMouseLeave)

// window.addEventListener("resize",handleWindowResize)
// window.addEventListener("copy",handleWindowCopy)
// window.addEventListener("offline",offLinedd)
// window.addEventListener("online",onLinedd)

