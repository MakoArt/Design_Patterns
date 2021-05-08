//1.EVITAMOS LA COLISION DE NOMBRES

//2.CREAMOS UN OBJETO GLOBAL Y METEMOS TODAS LAS PROPIEDADES 
// Y METODOS QUE PODRAN SER ACCEDIDAS 
// SEGÚN NOS INTERESE

const listadoBoda={};


listadoBoda.mujeres=['Maria','Juani','Silvia','Sanpedra']
listadoBoda.hombres=['Pedro','Luis','Antonio']

listadoBoda.funciones={

   bailar:function(){
       console.log('estamos todos bailando')
   }

}
listadoBoda.esEnValencia=true;


console.log(listadoBoda.funciones.bailar())
console.log(listadoBoda.esEnValencia)