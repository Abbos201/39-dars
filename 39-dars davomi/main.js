let image = document.getElementById("img");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    if(image.getAttribute("src") == "img/on.png"){
        image.setAttribute("src", "img/off.png");
        playoff();
        btn.innerHTML = "on"
    }else{
        image.setAttribute("src", "img/on.png");
        playOn();
        btn.innerHTML = "off"
    }
});

let playOn = () => new Audio("voise/on.mp3").play();
let playoff = () => new Audio("voise/off.mp3").play();