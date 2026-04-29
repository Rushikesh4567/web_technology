import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-div-directives',
  imports: [CommonModule],
  templateUrl: './div-directives.html',
  styleUrl: './div-directives.css'
})
export class DivDirectives {
  showBox: boolean = true;

  students: string[] = ["Rushikesh", "Amit", "Sneha", "Om"];

  isActive: boolean = true;

  toggleBox() {
    this.showBox = !this.showBox;
  }

  toggleClass() {
    this.isActive = !this.isActive;
  }
}