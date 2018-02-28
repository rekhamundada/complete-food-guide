import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from '../shared/dropdown.directive';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes.routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from '../auth/auth-guard.service';



@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RecipesRoutingModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [],
})
export class RecipesModule { }

