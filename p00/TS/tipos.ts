interface Usuario { 
    nombre: string; 
    apellidos: string; 
     } 
     
     
     class Tipo { 
         algo: any; 
         id: number | string; 
         sNombre: string; 
         nEdad: number; 
         isAlumno: boolean; 
         aDatos: Array<string>; 
         aNumbers: number[]; //tipo array tambien
         oUser: Usuario; //tipo de la interfaz
     
     
         constructor() { 
             this.oUser = {nombre: "Pepe", apellidos: "Perez"} 
             this.aDatos = []; //inicialización obligatoria
             this.aDatos.length; 
         } 
     } 
     
     
     class Tipica { 
         constructor (public uno: string, public dos: number) { 
         } 
     } 
    