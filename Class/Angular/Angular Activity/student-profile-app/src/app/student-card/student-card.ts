import { Component } from '@angular/core';

@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  name: string = "Rushikesh";
  course: string = "B.Tech AIML";
  imageUrl: string = "https://picsum.photos/150";

  changeImage() {
    this.imageUrl = "https://picsum.photos/150";
  }
}