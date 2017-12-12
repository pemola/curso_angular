const aDatos = [{precio : 20}, {precio : 23}, {precio : 29}]
//constante que no puede dejar de ser un array

if(1)
{
    var y = 23 //ambito global
    let x = 12 //ambito local
    x++
    //aDatos.forEach(function (elem) {elem.precio++})
    aDatos.forEach(elem => 
        {
            elem.precio++
        //console.log("El precio es " + elem.precio)
        console.log(`
                El precio es 
                ${elem.precio} €
            `) 
        //usando interpolación de variables (con $) en vez de concatenación
        //utilizando la comilla ` permite respetar espacios, tabulaciones... como una template 
        }
    ) //misma función pero utilizando arrow functions
    console.log(x)
    console.log(aDatos)
}

console.log(y)