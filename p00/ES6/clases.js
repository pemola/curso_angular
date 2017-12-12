class Libro {
    constructor(autor, titulo)
    {
        this.autor = autor
    this.titulo = titulo
    }

    mostrar(){ console.log(this)}
}

//herencia
class LibroTecnico extends Libro{
    constructor(autor, titulo, tema)
    {
        super(autor, titulo)
        this.tema = tema
    }
}


const oLibro = new Libro("Pepito", "Angular facil")
const oLibro2 = new LibroTecnico("Pepito", "libro tecnico", "programacion")

oLibro.editorial = "Anaya" //propiedad inexistente, se puede asignar

oLibro.mostrar() //utilizando un metodo de la clase libro
console.log(oLibro2)