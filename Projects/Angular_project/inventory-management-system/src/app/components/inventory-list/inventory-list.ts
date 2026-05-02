import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService, InventoryItem } from '../../services/inventory';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory-list.html',
  styleUrl: './inventory-list.css'
})
export class InventoryList {

  items: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService) {
    this.items = this.inventoryService.getItems();
  }

  deleteItem(id: number): void {
    this.inventoryService.deleteItem(id);
    this.items = this.inventoryService.getItems();
  }

  getTotalItems(): number {
    return this.inventoryService.getItems().length;
  }
}