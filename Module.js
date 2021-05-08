const secreto=(function(){
  
    let mensajePrivado="Soy privado"

    let mensajePublico="Soy publico"
  
    const saltar=()=>{
        let mensaje="Estoy Saltando"
        return mensaje
    }
   
    return{
    mensajePublico,
    mensajePrivado,
    publico:function(){
      console.log(saltar())
    }
     
    }
    

    


})()

console.log(secreto.mensajePublico)
console.log(secreto.publico())



