import { Component, OnInit } from '@angular/core';
import { Ingradient } from '../shared/ingradient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingradients : Ingradient[] = []
  constructor() { }

  ngOnInit() {
  }

  onShoppingListEdited(item){
    if (item.name.length === 0 || item.amount.length === 0){
      console.log("Please enter both values.");
    }else{
      let i;
      for(i=0;i<this.ingradients.length;i++){
        if (this.ingradients[i].name.toLowerCase() === item.name.toLowerCase()) {
          this.ingradients[i].amount+=item.amount;
          break;
        }
      }
      if(i === this.ingradients.length)
        this.ingradients.push(item);
    }
    //   }else{
    //     console.log("length = "+this.ingradients.length)
    //     for (let i=0;i<this.ingradients.length;i++){
    //       console.log("for = " + this.ingradients.length);
    //       if (this.ingradients[i].name === itemName){
    //         console.log("outside = "+i);
    //         if (this.ingradients[i].amount < 1 || this.ingradients[i].amount > itemAmount){
    //           console.log("Please enter correct amount");
    //         }else{
    //           if (this.ingradients[i].amount === itemAmount){
    //             console.log(i);
    //             this.ingradients.splice(i,1);
    //           } 
    //         }
    //       }else{
    //         console.log("Entered recipe is not in shopping list");
    //       }
    //     }
    //   }
    // }
  }

}
