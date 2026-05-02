import { Injectable } from '@angular/core';

export interface InventoryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private items: InventoryItem[] = [];

  getItems(): InventoryItem[] {
    return this.items;
  }

  addItem(item: InventoryItem): void {
    item.id = this.items.length + 1;
    this.items.push(item);
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  getTotalItems(): number {
    return this.items.length;
  }
}