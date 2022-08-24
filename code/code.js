//======= LIENZO =======
let lienzo = document.getElementById("lienzo")
let ctx = lienzo.getContext("2d")

//======= IMAGENES =======
const nurseImg = new Image()
nurseImg.src= "../image/Nurse3Male.webp"


const virusImg = new Image()
virusImg.src = "../image/virus.png"

const virus2Img = new Image()
virus2Img.src = "../image/virus2.png"

const virus3Img = new Image()
virus3Img.src = "../image/virus3.png"

const virus4Img = new Image()
virus4Img.src = "../image/virus4.png"

const virus5Img = new Image()
virus5Img.src = "../image/virus5.png"

const vacunaImg = new Image()
vacunaImg.src = "../image/vacuna.png"

const pildoraImg = new Image()
pildoraImg.src = "../image/pildora.png"


//======= ELEMENTOS =======
const viral = []
const pildoras = []
const jeringuillas = []

function mostrarInfo(score, vida){
    ctx.fillStyle = "blue";
    ctx.font = "10px georgia bond";
    ctx.fillText("Anticovid Force", 120,12);
    //score
    ctx.fillText(`Score: ${score}`, 40, 65);
    ctx.fillText(`Vida: ${vida}`, 200, 65);
}



//======= CLASES ========
class Nurse{// --------------------------- Personaje
    constructor(x, y, w, h, imagen, score, vida){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.imagen = imagen
        this.score = score
        this.vida = vida
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
        //ctx.fillRect(this.x, this.y, this.w, this.h)
        ctx.drawImage(this.imagen, this.x, this.y, this.w, this.h)
    }

    morirse(){
    }
    disparar(){
        const vacuna = new Vacuna(this.x + this.w, this.y + 10, 17, 12, vacunaImg);
        jeringuillas.push(vacuna)
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
        //ctx.fillRect(this.x, this.y, this.w, this.h)
        ctx.drawImage(this.imagen,this.x, this.y, this.w,this.h);
        if(this.level === "simple"){
            this.x -= 4;
        }else{
            this.x-=7
        }
    }
}

class Pildora{// ---------------------------- Hostil 1
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
        if(this.level === "ramdom"){
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
const enfermero = new Nurse(5, 136, 17, 12, nurseImg, 0, 100)


//====== CREACION DE OBJETOS =======
function crearVirus(){
    
    const cant = Math.floor(Math.random() * 60);
        if(cant === 4){  
        const viruses = new Virus(330, 136, 17, 12, virusImg)
        viral.push(viruses)
        viruses.mostrar()
        console.log("creando virus")
    }
        if(cant === 3){  
       const viruses2 = new Virus(330, 123, 17, 12, virus2Img)
        viral.push(viruses2)
        viruses2.mostrar()
        console.log("creando virus")
    }
        if(cant === 2){  
        const viruses3 = new Virus(330, 109, 17, 12, virus3Img)
        viral.push(viruses3)
        viruses3.mostrar()
        console.log("creando virus")
    }
        if(cant === 1){  
        const viruses4 = new Virus(330, 96, 17, 12, virus4Img)
        viral.push(viruses4)
        viruses4.mostrar()
        console.log("creando virus")
    }
        if(cant === 0){  
        const viruses5 = new Virus(330, 82, 17, 12, virus5Img)
        viral.push(viruses5)
        viruses5.mostrar()
        console.log("creando virus")
    }
}

function crearPildoras(){
    
    const cant = Math.floor(Math.random() * 2000);
        if(cant === 4){  
        const pildora = new Virus(330, 136, 17, 12, pildoraImg)
        pildoras.push(pildora)
        pildora.mostrar()
        console.log("creando virus")
    }
        if(cant === 3){  
       const pildora2 = new Pildora(330, 123, 17, 12, pildoraImg)
       pildoras.push(pildora2)
        pildora2.mostrar()
        console.log("creando virus")
    }
        if(cant === 2){  
        const pildora3 = new Pildora(330, 109, 17, 12, pildoraImg)
        pildoras.push(pildora3)
        pildora3.mostrar()
        console.log("creando virus")
    }
        if(cant === 1){  
        const pildora4 = new Pildora(330, 96, 17, 12, pildoraImg)
        pildoras.push(pildora4)
        pildora4.mostrar()
        console.log("creando virus")
    }
        if(cant === 0){  
        const pildora5 = new Pildora(330, 82, 17, 12, pildoraImg)
        pildoras.push(pildora5)
        pildora5.mostrar()
        console.log("creando virus")
    }
}



//############## INICIO DE JUEGOS ##############

function iniciar(){

    teclas(enfermero)
    console.log(enfermero)
    enfermero.mostrar()

}

   let clear = setInterval(() =>{
    ctx.clearRect(0, 0, 330, 210)
    enfermero.mostrar()
    mostrarInfo(enfermero.score, enfermero.vida)
   

    viral.forEach((virus, index) =>{
        console.log(viral)
        virus.mostrar()
        if (virus.x <= enfermero.x + enfermero.w - 9 &&
             virus.x >= enfermero.x && 
             virus.y <= enfermero.y + enfermero.h && 
             virus.y >= enfermero.y){
               
            viral.splice(index, 1)
            enfermero.vida -= 20
            
            //alert("Game Over")
            //clearInterval(clear)
        }
        
    })

    
    pildoras.forEach((pildora, index) =>{
        console.log(pildoras)
        pildora.mostrar()

        if (pildora.x <= enfermero.x + enfermero.w - 9 && pildora.x >= enfermero.x && pildora.y <= enfermero.y + enfermero.h && pildora.y >= enfermero.y && enfermero.vida < 100){
            pildoras.splice(index, 1)
            enfermero.vida += 20
        }
    })



   
    crearVirus()
    crearPildoras()
   },50)
    
   iniciar()
   
    

