import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient'
import { ShoppingListService } from './shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  shoppingSubscribtion: Subscription;
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingSubscribtion = this.shoppingListService.IngredientAdded.subscribe(
      (ing: Ingredient[])=>{
      this.ingredients = ing;
    });
  }

  onAddIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
  }

  ngOnDestroy(){
    this.shoppingSubscribtion.unsubscribe();
  }
}