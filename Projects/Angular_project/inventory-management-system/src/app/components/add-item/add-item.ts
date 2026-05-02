import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryService, InventoryItem } from '../../services/inventory';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css'
})
export class AddItem {

  itemName: string = '';
  category: string = '';
  quantity: number = 0;
  price: number = 0;

  constructor(
    private inventoryService: InventoryService,
    private router: Router
  ) {}

  addItem(): void {

    const newItem: InventoryItem = {
      id: 0,
      name: this.itemName,
      category: this.category,
      quantity: this.quantity,
      price: this.price
    };

    this.inventoryService.addItem(newItem);

    alert('Item added successfully!');

    // Navigate to inventory list page
    this.router.navigate(['/inventory']);
  }
}