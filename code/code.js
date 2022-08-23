//======= LIENZO =======
let lienzo = document.getElementById("lienzo")
let ctx = lienzo.getContext("2d")

//======= IMAGENES =======
const nurseImg = new Image()
nurseImg.src= "../image/Nurse3Male.webp"


const virusImg = new Image()
virusImg.src = "../image/virus.png"

/*const vacunaImg = new Image()
vacunaImg.src = "../image/vacuna.png"

const pildoraImg = new Image()
pildoraImg.src = "../image/pildora.png"*/

//======= ELEMENTOS =======
const viral = []
//const vacunas = []

//======= CLASES ========
class Nurse{// --------------------------- Personaje
    constructor(x, y, w, h, imagen){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.imagen = imagen
        }
    derecha(){
        console.log("moverse hacia la derecha")
        if(this.x + this.w < 295){
            this.x += 5
        }  
    }
    
    izquierda(){
        console.log("moverse hacia la izquierda")
        if (this.x > 0){
            this.x -= 5
        }
    }

    arriba(){
        console.log("moverse hacia arriba")
        if(this.y > 86){
            this.y -= 13.5
        }  
    }
    
    abajo(){
        console.log("moverse hacia abajo")
        if (this.y < 135){
            this.y += 13.5
        }
    }
    mostrar(){
        ctx.drawImage(this.imagen, this.x, this.y, this.w, this.h)
    }

    morirse(){
    }
    disparar(){
    }
}



class Virus{// ---------------------------- Hostil 1
    constructor(x, y, w, h, imagen, level){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.imagen = imagen
        this.level = level
        
    }
    
    mostrar(){
        ctx.drawImage(this.imagen,this.x, this.y, this.w,this.h);
        if(this.level === "simple"){
            this.x -= 4;
        }else{
            this.x-=7
        }
    }
}


//====== ACCIONAR TECLAS ======

function teclas(enfermero){

    document.addEventListener("keyup",(evento) => {
        console.log("Tecla tocada", evento.code)
        switch(evento.code){
            case "KeyW":
                enfermero.arriba()
                break
            case "KeyS":
                enfermero.abajo();
                break
            case "KeyA":
                console.log("izquierda")
                enfermero.izquierda()
                break
            case "KeyD":
                console.log("Derecha")
                enfermero.derecha()
                break
            case "KeyP":
                enfermero.disparar()
                break
        }
    })
}


//====== VARIABLES GLOBAL =======
const enfermero = new Nurse(5, 137, 17, 12, nurseImg)
/*const viruses = new Virus(258, 136, 17, 12, virusImg, "")
const viruses2 = new Virus(258, 123, 17, 12, virusImg)
const viruses3 = new Virus(258, 109, 17, 12, virusImg)
const viruses4 = new Virus(258, 96, 17, 12, virusImg)
const viruses5 = new Virus(258, 82, 17, 12, virusImg)
*/

//====== CREACION DE OBJETOS =======
function crearVirus(){
    
    const cant = Math.floor(Math.random() * 60);
        if(cant === 4){  
        const viruses = new Virus(258, 136, 17, 12, virusImg)
        viral.push(viruses)
        viruses.mostrar()
        console.log("creando virus")
    }
        if(cant === 3){  
       const viruses2 = new Virus(258, 123, 17, 12, virusImg)
        viral.push(viruses2)
        viruses2.mostrar()
        console.log("creando virus")
    }
        if(cant === 2){  
        const viruses3 = new Virus(258, 109, 17, 12, virusImg)
        viral.push(viruses3)
        viruses3.mostrar()
        console.log("creando virus")
    }
        if(cant === 1){  
        const viruses4 = new Virus(258, 96, 17, 12, virusImg)
        viral.push(viruses4)
        viruses4.mostrar()
        console.log("creando virus")
    }
        if(cant === 0){  
        const viruses5 = new Virus(258, 82, 17, 12, virusImg)
        viral.push(viruses5)
        viruses5.mostrar()
        console.log("creando virus")
    }
}



//############## INICIO DE JUEGOS ##############

function iniciar(){

    teclas(enfermero)
    console.log(enfermero)
    enfermero.mostrar()

}

   setInterval(() =>{
    ctx.clearRect(0, 0, 330, 210)
    enfermero.mostrar()
   

    viral.forEach((virus) =>{
        console.log(viral)
        virus.mostrar()
    })


   
    crearVirus()
   },50)
    
   iniciar()
    

