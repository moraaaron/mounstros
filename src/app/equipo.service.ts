import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

equipo:any[]=[
{
nombre:'miguel',

especialidad: 'angular',

descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est animi dicta, dolorum nam repellendus fugit cumque dolorem itaque totam facilis molestias. Neque aliquid quas quo, doloribus nisi quos necessitatibus et?',

},
{
    nombre: 'manuel',

    especialidad: 'java',

    descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est animi dicta, dolorum nam repellendus fugit cumque dolorem itaque totam facilis molestias. Neque aliquid quas quo, doloribus nisi quos necessitatibus et?',

  }
  


]



  constructor() { }

  obtenerEquipo(){
    return this.obtenerEquipo();
  }
}
