import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor() {}

  addItemToCart(product: Product): void {
    this.items.push(product);
  }

  getCartItems(): Product[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
