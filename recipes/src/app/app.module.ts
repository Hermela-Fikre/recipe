import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeDetail } from './recipe-detail/recipe-detail.component';
import { RecipeForm } from './recipe-form/recipe-form.component';
import { RecipeList } from './recipe-list/recipe-list.component';
import { RecipeSearch } from './recipe-search/recipe-search.component';

import { Notifications } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetail,
    RecipeForm,
    RecipeList,
    RecipeSearch,
   
    Notifications
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
