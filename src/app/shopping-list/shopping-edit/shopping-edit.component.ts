import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingradient } from '../../shared/ingradient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('itemName') iName : ElementRef;
  @ViewChild('itemAmount') iAmount : ElementRef;
  @Output() shoppingListEdited = new EventEmitter<Ingradient>();
 
  constructor() { }

  ngOnInit() {
  }

  addToShoppingList(itemName, itemAmount){
    const name : string = this.iName.nativeElement.value;
    const amount : number = parseInt(this.iAmount.nativeElement.value);
    this.shoppingListEdited.emit(new Ingradient(name,amount));
  }

}
