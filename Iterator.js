class Iterator{
    constructor(lista){
     this.index=0;
     this.lista=lista;
    }
    first(){
        return this.lista[0]
    }
    next(){
        return this.lista[this.index+=1]
    }
    prev(){
        return this.lista[this.index-=1]
    }
    current(){
        return this.lista[this.index]
    }
    reset(){
        return this.index=0;
    }   
    hasNext(){
        return(this.index + 1 < this.lista.length)
    }
}

const cinturones=['blanco','amarillo','naranja','verde','azul','marron','rojo','negro']

const iterador=new Iterator(cinturones)

console.log(iterador.current())
console.log(iterador.hasNext())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.prev())
console.log(iterador.prev())
console.log(iterador.prev())
console.log(iterador.prev())
console.log(iterador.prev())
console.log(iterador.prev())
console.log(iterador.prev())