import { Component } from '@angular/core';
import { EjemploService } from './service/ejemplo.service'
import { BackendService } from './service/backend/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Proyecto4A';

  constructor(private readonly EjemploService : EjemploService, private readonly backendService: BackendService) {
    EjemploService.imprimir();
    backendService.Verificar()
  }
}

  