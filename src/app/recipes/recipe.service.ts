import { Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'cake',
      'this is very tasty',
      '/assets/126551741.jpg',
      [new Ingredient('fruits', 5),
      new Ingredient('flour', 2)]),
      new Recipe('burger',
      'this is vegeterian burger',
      '/assets/burger.jpeg',
      [new Ingredient('buns', 4 ),
      new Ingredient('potatoes', 2 )])
  ];
  constructor(private shoppingListService: ShoppingListService) { }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipeById(index: number) {
    return this.recipes.slice()[index];
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  addRecipe( recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe (index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
