import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Cake1", "Cacke Recipe", "https://img.taste.com.au/P9x2Yltr/taste/2016/11/homemade-chocolate-cake-85524-1.jpeg"),
    new Recipe("Cake2", "Cacke Recipe", "https://img.taste.com.au/P9x2Yltr/taste/2016/11/homemade-chocolate-cake-85524-1.jpeg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
