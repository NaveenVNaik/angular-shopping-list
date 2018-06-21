import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() shoppingListEdited = 
  new EventEmitter<{itemName:string,itemAmount:number,action:number}>();
 
  constructor() { }

  ngOnInit() {
  }

  addToShoppingList(itemName, itemAmount){
    // console.log(itemName.value+" "+itemAmount.value);
    this.shoppingListEdited.emit(
      { itemName: itemName.value, itemAmount: itemAmount.value,action:1}
    );
  }

  deleteFromShoppingList(itemName, itemAmount){
    // console.log(itemName.value + " " + itemAmount.value);
    this.shoppingListEdited.emit(
      { itemName: itemName.value, itemAmount: itemAmount.value, action: 2 }
    );
  }

}
