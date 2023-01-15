//Seleção de elementos
var number = document.querySelector(".number");
var dec = document.querySelector(".decrease");
var res = document.querySelector(".reset");
var inc = document.querySelector(".increase");

//Funções
var changeColor = () => {
    if(number.innerHTML == 0) {
        return number.style.color = "#222";
    } else if(number.innerHTML < 0) {
        return number.style.color = "red";
    } else if(number.innerHTML > 0) {
        return number.style.color = "green";
    }
}


// Eventos
dec.addEventListener("click", () => {   
    number.innerHTML = number.innerHTML - 1;
    number.style.color = changeColor();
})

res.addEventListener("click", () => {
    number.innerHTML = "0";
    number.style.color = changeColor();
});

inc.addEventListener("click", () => {
    number.innerHTML = Number(number.innerHTML) + 1;
    number.style.color = changeColor();
})