class Domestico{
    constructor(name,especie){
        this.name=name;
        this.especie=especie;
      
        //linea mas importante y que caracteriza al patron singleton
        //nos permite solo crear una instancia , va dentro del 
        //constructor 
        if(typeof Domestico.instance==='object'){
            return Domestico.instance;
        }

        //creacion de la primera instancia si no tenemos ninguna 
        Domestico.instance=this;
    }
}

const lucas=new Domestico('lucas','perro')
const bongo=new Domestico('bongo','gato')
const mango=new Domestico('mango','mapache')


console.log(lucas)
console.log(bongo)
console.log(mango)