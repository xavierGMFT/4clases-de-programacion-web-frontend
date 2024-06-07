import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  mensaje: string = '';

  constructor(private http: HttpClient) { }

  Verificar() {
    this.http.get('http://localhost:3000', { responseType: 'text'})
      .subscribe(
        (response: string) => {
          // Si la solicitud fue exitosa, asignamos un mensaje de éxito
          this.mensaje = 'Conexión exitosa con el backend.';
          console.log(response); // Puedes manejar la respuesta del backend si es necesario
        },
        (error) => {
          // Si ocurrió un error, asignamos un mensaje de error
          this.mensaje = 'Error al conectar con el backend: ' + error.message;
          console.error(error); // Puedes manejar el error si es necesario
        }
      );
  }
}
