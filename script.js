var  pizzaMenu = document.querySelector("#pizza")

var  burgerMenu = document.querySelector("#burger")

var  noodleMenu = document.querySelector("#noodle")

var  drinkMenu = document.querySelector("#drink")


function  pizzacard(){
    pizzaMenu.style.display= "flex"
    burgerMenu.style.display=  "none"
    noodleMenu.style.display=  "none"
    drinkMenu.style.display=  "none"

}

function  burgercard(){
    pizzaMenu.style.display= "none"
    burgerMenu.style.display=  "flex"
    
    noodleMenu.style.display=  "none"
    drinkMenu.style.display=  "none"

}
function  noodlecard(){
    pizzaMenu.style.display= "none"
    burgerMenu.style.display=  "none"
    noodleMenu.style.display=  "flex"
    drinkMenu.style.display=  "none"

}
function  drinkcard(){
    pizzaMenu.style.display= "none"
    burgerMenu.style.display=  "none"
    noodleMenu.style.display=  "none"
    drinkMenu.style.display=  "flex"

}