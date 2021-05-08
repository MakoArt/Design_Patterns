class Boxeador{
    constructor(velocidad,potencia,defensa,ataque){
        this.velocidad=5;
        this.potencia=5;
        this.defensa=5;
        this.ataque=5;
    }
    setVelocidad(velocidad){
    this.velocidad=velocidad;
    return this;
    }
    setPotencia(potencia){
    this.potencia=potencia;
    return this;
    }
    setDefensa(defensa){
    this.defensa=defensa;
    return this
    }
    setAtaque(ataque){
    this.ataque=ataque;
    return this
    }
    build(){
        return{
         velocidad:this.velocidad,
         potencia:this.potencia,
         defensa:this.defensa,
         ataque:this.ataque
        }
    }
}

const amateur=new Boxeador().build()
const neoProfesional=new Boxeador()
                    .setVelocidad(7)
                    .setAtaque(8)
                    .setPotencia(7)
                    .setDefensa(6)

const profesional=new Boxeador()
                    .setVelocidad(9)
                    .setAtaque(10)
                    .setPotencia(8.5)
                    .setDefensa(9)




