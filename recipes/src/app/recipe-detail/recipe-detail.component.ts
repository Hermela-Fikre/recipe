import { Component} from '@angular/core';
import { Router, RouteParams } from '@angular/router/@angular/router';
import { Response } from '@angular/http';

import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe';
import { UtilsService } from '../services/utils';
import { Notification } from '../notifications/notifications.model';
import { NotificationsService } from '../notifications/notifications.service';





@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
 
  providers: [ RecipeService, UtilsService]
})
export class RecipeDetail {
    private _num = Number;
    private _loading: boolean = true;
    private _recipe: Recipe;

  constructor(private _service: RecipeService,
              private _utils: UtilsService,
              private _notes: NotificationsService,
              private _router: Router,
              private _routeParams: RouteParams
             ) { 
         _service.getRecipe(Number(_routeParams.get('id'))).subscribe(apiData => {
           let errors = apiData.alerts.filter(x => x.type ===  'error');

           if (errors.length) {
                errors.forEach(err => _notes.add(new Notification(err.type, err.text)));
                _router.navigate(['RecipeList']);
                                               
           }
           this._recipe = apiData.data[0];
           this._loading = false;
         });
    }
    editRecipe(): boolean {
      this._router.navigate(['RecipeEdit', {id:this._recipe.id }]);
      return false;

    }
      deleteRecipe(): boolean {
      if (confirm('This cannot be undone. Are you sure?')) {
          this._service.deleteRecipe(this._recipe.id).subscribe(res => {
            res.alerts.forEach(a => this._notes.add(new Notification(a.type, a.text)));

            this._router.navigate(['RecipeList']);
            
          });
      }
      return false;


    

 

    }
  }
