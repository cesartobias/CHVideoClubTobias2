import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Carrito } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private shoppingCart$: BehaviorSubject<Carrito>;

  constructor(
    private httpClient: HttpClient
  ) {
   
     // Initialize shopping cart with default value
    this.shoppingCart$ = new BehaviorSubject<Carrito>({ id: 0, items: [], subTotal: 0 });

    // Load shopping cart data
    this.getShoppingCart(); 
  }

  private getShoppingCart() {
    this.httpClient.get<Carrito>('/assets/data.json').subscribe((shoppingCart) => {
      this.setShoppingCart(shoppingCart);
    },
    () => {
      console.error('Shopping cart data could not be loaded.');
    });
  }

  private setShoppingCart(shoppingCart: Carrito) {
    this.shoppingCart$.next(shoppingCart);
  }

  getItems(): Observable<Item[]> {
    return this.shoppingCart$.pipe(
      pluck('items')
    );
  }

  getSubTotal(): Observable<number> {
    return this.shoppingCart$.pipe(
      map((shoppingCart) => {
        const subTotal = shoppingCart?.items
          .map((item) => item.quantity * item.sku.price)
          .reduce((p, c) => p + c, 0);
        return subTotal;
      })
    );
  }

  getCount(): Observable<number> {
    return this.shoppingCart$.pipe(
      map((shoppingCart) => {
        const count = shoppingCart.items
          .map((item) => item.quantity)
          .reduce((p, c) => p + c, 0);
        return count;
      })
    );
  }

  updateQuantity(updateQuantity: number, updateItem: Item) {
    const shoppingCart = { ...this.shoppingCart$.value };
    shoppingCart.items = shoppingCart.items.map((item) => {
      item.quantity = item.id === updateItem.id ? +updateQuantity : item.quantity;
      return item;
    });
    this.setShoppingCart(shoppingCart);
  }

  deleteItem(deleteItem: Item) {
    const shoppingCart = { ...this.shoppingCart$.value };
    shoppingCart.items = shoppingCart.items.filter((item) => deleteItem.id !== item.id);
    this.setShoppingCart(shoppingCart);
  }
}
