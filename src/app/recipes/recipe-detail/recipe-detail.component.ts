import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/observable';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // const params = + this.route.snapshot.params['id'];
    this.route.params
     .subscribe(
       (params: Params) => {
         this.id = +params['id'];
         this.recipe = this.recipeService.getRecipeById(this.id);
        }
     );
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  getTheRecipe(id) {
    this.recipeService.getRecipeById(id);
  }
  deleteThisRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);

  }
}
// const param = +this.route.snapshot.paramMap.get('id');
// if (param) {
//  const  id = param;
//   this.getstudent(id);
// }
// }
// getstudent(id) {
// this.allStudentsService.getSingleStudent(id)
// .subscribe(
//   student => this.student = student,
//   error => this.errorMessage = <any>error
// );
// }
