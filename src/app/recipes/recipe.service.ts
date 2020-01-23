import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Cookie',
    'A Banana Cookie',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3w385vODPcLligKz41e6In9rjzhWiYJ9Pkhh3VAlvzbBMmLvF',
     [new Ingredient('Banana', 10),new Ingredient('Choco', 2)]),
    new Recipe('Tantoori Chicken',
    'Tantoori Kebap',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvHia79vbWB9UaN7MjxEulucFfMGdYh_0WC4Sh0z7vHgSojnYy',
    [new Ingredient('Chicken', 1),new Ingredient('Butter', 5), new Ingredient('Lemon', 3)])
  ]

  recipeSelected = new EventEmitter<Recipe>(); 

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // Provide exact copy of Array
  }

  getRecipe(index: number) {
    //console.log(this.recipes[index]);
    return this.recipes[index]; 
  }

  addIngredientToShoppingList(ings: Ingredient[]) {
    this.shoppingListService.addIngreedients(ings);
  }

}