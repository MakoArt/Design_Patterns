class Negocio{
    constructor(dinero){
        this.dinero=dinero;
    }
    aceptado(dinero){
        if(dinero>3000){
            this.aceptado=true
        }else{
            this.aceptado=false
        }
        return this.aceptado

    }
}



class Vendedor extends Negocio{
    constructor(dinero){
        super(dinero)
    }
}



class Cliente extends Negocio{
    constructor(dinero,aceptado){
        super(dinero,aceptado)
    }
}


let alexander=new Cliente()

console.log(alexander.aceptado(3001))