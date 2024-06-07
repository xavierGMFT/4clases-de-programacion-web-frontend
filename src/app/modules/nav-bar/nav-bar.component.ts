import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CartService } from '../../shered/cart-service/cart.service';

@Component({
  selector: 'app-nav-bar', // Cambié el selector por el que estás usando en tu aplicación
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  cartItems: any []= [];
  items: MenuItem[] | undefined;

  constructor( private readonly CartService : CartService){}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'

      },
      {
        label: 'Formulario',
        icon: 'pi pi-star',
        routerLink: '/form'
      },
      {
        label: 'Formulario1',
        icon: 'pi pi-search',
        routerLink: '/form2'
        
      },
      {
        label: 'Contacto',
        icon: 'pi pi-envelope',
        routerLink: '/contacto'
      }
    ];
  
  }
}
