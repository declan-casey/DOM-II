// Your code goes here
const mainNav = document.querySelector(".intro h2");

mainNav.addEventListener("mouseover", function(event){event.target.style.backgroundColor = "tan";});
  
mainNav.addEventListener("mouseout", function(event){event.target.style.backgroundColor = "white";});


const mainTitle = document.querySelector("h1");

document.addEventListener("keydown", function() 
    {mainTitle.style.fontSize = "20rem"}  
)

document.addEventListener("keyup", function() 
    {mainTitle.style.fontSize = "10rem"}  
)

const imgs = document.querySelectorAll(".img-content");
Array.from(imgs).forEach(function(imgs){
    imgs.addEventListener("dblclick", function(event){
        event.target.style.borderRadius = "50%";
})
// imgs.addEventListener("dblclick", function(event){
//     event.target.style.borderRadius = "50%";
});



const textContent = document.querySelectorAll(".text-content h2");
Array.from(textContent).forEach(function(textContent){
    textContent.addEventListener("click", function(event){
        event.target.style.color = "red";
})
});


window.addEventListener('load', () =>{
    console.log('page is fully loaded');

    alert('page is fully loaded');
});


window.addEventListener("scroll", (e) => {
    const axis = window.scrollY;

    if (axis > 400){
        document.querySelectorAll("p").forEach((p) => {
            p.style.fontSize = "2rem";
        });
    } else {
        document.querySelectorAll("p").forEach((p) => {
            p.style.fontSize = "inherit";
    });
}
});


window.addEventListener("copy", (e) => {
    alert('Beyonce is only alright');
})


window.addEventListener("contextmenu", (e) => {
    alert('Seriously, shes kinda over-rated')
})
