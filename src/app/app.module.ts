import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingList } from './shopping/shoppingList/shoppingList.component';
import { ShoppingListEdit } from './shopping/shoppingList/shoppingListEdit/shoppingListEdit.component';
import { RecipeListComponent } from './recipe/recipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipeBook/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingList,
    ShoppingListEdit,
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
