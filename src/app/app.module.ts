import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
 import {appRoute} from './app.routes';
import { AppComponent } from './app.component';
import {LayoutComponent} from '../layouts/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { dataService } from '../data.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MaterialModule } from '../shared/material/material.module'; 
import { gridComponent } from '../grid/grid.component';

import { GridResolver } from '../grid/grid.resolver';
import { searchComponent } from '../search/search.component';
import { MatSnackBar } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    gridComponent,
    searchComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute, {
      useHash: true
    }),
    MaterialModule,
  ],
  providers: [dataService,GridResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
