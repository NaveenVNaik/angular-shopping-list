import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() itemClicked = new EventEmitter<{recipeItem: Recipe}>();

  recipes: Recipe[] = [
    new Recipe("Cake1", "Cacke Recipe1", "https://img.taste.com.au/P9x2Yltr/taste/2016/11/homemade-chocolate-cake-85524-1.jpeg"),
    new Recipe("Cake2", "Cacke Recipe2", "https://timeincsecure-a.akamaihd.net/rtmp_uds/474428695/201711/3955/474428695_5661309737001_5661262459001-vs.jpg?pubId=474428695&videoId=5661262459001"),
    new Recipe("Cake3", "Cacke Recipe3", "https://www.tasteofhome.com/wp-content/uploads/2017/10/Mint-Patty-Cake_exps140673_CMT2426390C08_17_2b_RMS-1.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

  onItemClicked({ recipeItem}) {
    // console.log("hii" + recipeItem.name,recipeItem.description);
    this.itemClicked.emit({recipeItem:recipeItem});
  }
}
