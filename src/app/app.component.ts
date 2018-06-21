import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  recipeClick:boolean = true;

  onNavClicked = (navClickValue) => {
    this.recipeClick=navClickValue;
  }
}
