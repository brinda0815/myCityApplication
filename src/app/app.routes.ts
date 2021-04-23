import { Routes } from "@angular/router";
import { gridComponent } from "../grid/grid.component";
import { LayoutComponent } from "../layouts/layout.component";
import {GridResolver} from '../grid/grid.resolver';

export const appRoute: Routes = [
  { path: '', component:LayoutComponent},
  {
    path: 'grid/:name',
    component: gridComponent,
    resolve: { gridResolver : GridResolver }
  }, 
  { path: '**', redirectTo: '/'} 
];
