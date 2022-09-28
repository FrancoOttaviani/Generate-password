let range = document.getElementById("range")

let checkMin = document.getElementById("minusculas")
let checkMay = document.getElementById("mayusculas")
let checkNum = document.getElementById("numeros")
let checkEsp = document.getElementById("carEspeciales")

let min = checkMin.checked;
let may = checkMay.checked;
let num = checkNum.checked;
let esp = checkEsp.checked;

let boton = document.getElementById("boton");
let pantalla = document.getElementById("pantalla")

checkMin.addEventListener("change", function(){
    min = checkMin.checked;

})

checkMay.addEventListener("change", function(){
    may = checkMay.checked;    
})

checkNum.addEventListener("change", function(){
    num = checkNum.checked;    
})

checkEsp.addEventListener("change", function(){
    esp = checkEsp.checked;    
})

range.addEventListener("change", function(){
    cantCaracteres.innerHTML = range.value; 
})


cantCaracteres.innerHTML = range.value;



function prepararCaracteresUsables(minusculas, mayusculas, numeros, especiales){
    
    let min = "qwertyuiopasdfghjklñzxcvbnm"
    let may = "QWERTYUIOPASDFGHJKLZXCVBNMÑ"
    let num = "0123456789"
    let esp = "°!#$%&/()?¡¿'-_[{}]|"
    
    let caracteresUsables = "";
    
    if(minusculas === true){
        caracteresUsables += min; 
    }
    if(mayusculas === true){
        caracteresUsables += may
    }
    if(numeros === true){
        caracteresUsables += num;
    }
    if(especiales === true){
        caracteresUsables += esp;
    }
    
    return caracteresUsables;
}


function generarContraseña (rango) {
    let caracteresUsables = prepararCaracteresUsables(min, may, num, esp)
    let contraseña = "";     
    for (let index = 0; index < rango; index++) {
        if(caracteresUsables[index] === undefined){
            return "Seleccione Opcion de Caracteres"
        }
        contraseña += caracteresUsables[Math.floor(Math.random() * caracteresUsables.length)]
    }
    return contraseña;
}


boton.addEventListener("click", function(){
    pantalla.value = generarContraseña(range.value)
})

function fuerza (){
    let fuerza = "|   |   |   |   |"

}