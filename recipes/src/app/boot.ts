import { bootstrap } from '@angular/platform-browser/@angular/platform-browser';
import { ROUTER_PROVIDERS } from '@angular/router/@angular/router';
import { HTTP_PROVIDERS } from '@angular/http/@angular/http';
//import { enableProdMode } from '@angular/core';

import { NotificationsService } from './notifications/notifications.service';
import { RecipeSearchService } from './recipe-search/recipe-search.service';
import { AppComponent } from './app.component';

//enableProdMode();
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    NotificationsService,
    RecipeSearchService ]);
