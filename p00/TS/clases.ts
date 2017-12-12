interface Edicion{ //no tienen ambito, son siempre publicos
    editorial: string;
    fecha:number;
}

class Libro implements Edicion{
    public id :number | string; //tipo multiple
    public autor:string;
    public titulo: string;
    editorial: string;
    fecha:number;
    constructor(autor, titulo)
    {
        this.autor = autor
        this.titulo = titulo
    }

    //mostrar(){ console.log(this)}
}

//herencia
class LibroTecnico extends Libro{
    public tema:string;
    constructor(autor, titulo, tema)
    {
        super(autor, titulo)
        this.tema = tema
    }
    mostrar(){ console.log(this)}
}


const oLibro = new Libro("Pepito", "Angular facil")
//concordancia de tipos estructural
let oLibro3 : Libro = {
    id :'', 
    editorial: '',
    fecha :0,
    autor: '', 
    titulo: ''
} 
const oLibro2 = new LibroTecnico("Pepito", "libro tecnico", "programacion")

//oLibro.editorial = "Anaya" //propiedad inexistente, se puede asignar
//no funciona en typescript

oLibro.mostrar() //utilizando un metodo de la clase libro
console.log(oLibro2)