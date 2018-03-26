import { Component } from '@angular/core';
import {Recipe} from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Recipe Box';
  recipes: Recipe[] = [
    new Recipe('Apple pie', 'Grandmas recipe of a delicious apple pie', 'Instructions......'),
    new Recipe('Quesadilla', 'Delicious chicken Quesadilla', 'Instructions......'),
    new Recipe('Pumpkin pie', 'Family recipe of a delicious pumpkin pie', 'Instructions......')
  ];

  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

}
