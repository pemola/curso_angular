let oPrueba = {
    precio: 12,
    iva: 1.16,
};

//función asincrona
oPrueba.calculaIvaAsync = function(){
    /*setTimeout(function(){
        let precioFinal = this.precio * this.iva //asi devuelve Nan (undefined) => se invoca this en el momento de ejecución
        console.log(`
        Usando una funcion clasica:
        El precio final es ${precioFinal}
        `);
    
    }, 1000) */

    setTimeout(() => {
        let precioFinal = this.precio * this.iva //asi devuelve Nvalor porque this tiene un comportamiento semantico utilizando arrow functions
        console.log(`
        Usando una funcion clasica:
        El precio final es ${precioFinal}
        `);
    
    }, 1000)

    //return precioFinal
}

//x = oPrueba.calculaIvaAsync()
//console.log("Linea final" + x)

oPrueba.calculaIvaAsync()

console.log("Lines final") //sale al principio

