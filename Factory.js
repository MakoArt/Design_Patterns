class CreateFigure{
    createFigure(){
        console.log('Vamos as crear una figura')
    }
}

class Square extends CreateFigure{
    constructor(){
        super();
    }
  buildSquare(marginTop,element,width,height,border,backgroundColor){
     let elemento=document.createElement(element)
     elemento.style.marginTop=`${marginTop}`
     elemento.style.width=`${width}`
     elemento.style.height=`${height}`
     elemento.style.border=`${border}`
     elemento.style.backgroundColor=`${backgroundColor}`
     document.body.appendChild(elemento)
    }
}

class Circle extends CreateFigure{
    constructor(){
        super();
    }
    buildCircle(element,width,height,border,backgroundColor){
      let elemento=document.createElement(element)
      elemento.style.width=`${width}`
      elemento.style.height=`${height}`
      elemento.style.border=`${border}`
      elemento.style.borderRadius='50px 50px 50px 50px'
      elemento.style.backgroundColor=`${backgroundColor}`
      document.body.appendChild(elemento)
    }
}

class FigureFactory{
    constructor(type){
        switch(type){
            case "square":
                return new Square()
            case "circle":
                return new Circle()
            default:
                return null;
        }
    }
}

 
const cuadradoVerde=new FigureFactory('square')
const cuadradoAzul=new FigureFactory('square')
const circuloNaranja=new FigureFactory('circle')

circuloNaranja.buildCircle('div','100px','100px','3px solid green','orangered')
cuadradoVerde.buildSquare('200px','div','100px','100px','3px solid black','green')
cuadradoAzul.buildSquare('250px','div','200px','200px','3px solid red','blue')

