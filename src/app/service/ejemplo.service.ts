import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EjemploService {
  imprimir(){
    return console.log("Servicio Funcionando")
  }

  constructor() { 
    
  }
}
