import { Component } from '@angular/core';
import { CartService } from '../../shered/cart-service/cart.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'] // Corregido el error tipográfico
})
export class ProductListComponent {
  /* 
  products = [
    {id: 1, name: 'Producto pepsi', price: 2},
    {id: 2, name: 'Producto bimbo', price: 4},
    {id: 1, name: 'Producto coca cola', price: 1},
    {id: 2, name: 'Producto galleta', price: 5},
    {id: 1, name: 'Producto agua', price: 1},
    {id: 2, name: 'Producto papa', price: 2}
  ]; 
  */

  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  /*
  ngOnInit(): void {
    this.cartService.getItems().subscribe(items => this.cartItems = items);
  }

  onClicAdd(item: any): void {
    this.cartService.addItems(item).subscribe(items => this.cartItems = items);
  }

  onClickDelete(itemId: number): void {
    this.cartService.removeItem(itemId).subscribe(() => console.log("Removido exitosamente"));
  }

  onClickClear(): void {
    this.cartService.clearCart().subscribe(() => console.log("Removida toda la lista exitosamente"));
  }
  */
}
