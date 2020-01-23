import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient'

@Injectable({
  providedIn:"root"
})
export class ShoppingListService {
  private  ingredients: Ingredient[] = [
    new Ingredient('Banana', 5),
    new Ingredient('Sugar', 25)
  ];
  constructor() { }

  IngredientAdded = new Subject<Ingredient[]>();

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngreedient(ing: Ingredient){
    this.ingredients.push(ing);
    this.IngredientAdded.next(this.ingredients.slice());
  }

   addIngreedients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);// Spread Operator(...) it's used to convert Array of elements into list of single elements
    this.IngredientAdded.next(this.ingredients.slice());
  }

}