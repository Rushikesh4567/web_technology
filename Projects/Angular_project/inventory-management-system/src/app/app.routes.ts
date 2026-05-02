import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { InventoryList } from './components/inventory-list/inventory-list';
import { AddItem } from './components/add-item/add-item';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'inventory', component: InventoryList },
  { path: 'add-item', component: AddItem }
];