function hacerAlgoPromesa()
{
   return new Promise(function (resolve, reject){
       //console.log(`hacer algo que ocupe un tiempo...`)
       //setTimeout(resolve, 1000);
       setTimeout( () =>
     {
         console.log(`hacer algo que ocupe un tiempo...`)
         resolve() //siempre se resuelve positivamente
     })
  }) 
}

hacerAlgoPromesa()
console.log("Ultima linea")
//funcion a ejecutar cuando se resuelva la promesa
hacerAlgoPromesa().then( 
    () => {console.log("Ultima linea")}, //si todo va bien
    () => {console.log("Error")} //si todo va mal
) 
/* Hace lo mismo que la anterior
hacerAlgoPromesa().then( 
    () => {console.log("Ultima linea")}, //si todo va bien
).catch(
    () => {console.log("Error")} //si todo va mal
)*/
