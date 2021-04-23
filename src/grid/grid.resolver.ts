import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { dataService } from '../data.service';


@Injectable()
export class GridResolver implements Resolve<any> {
  constructor(private datasrvc: dataService) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.datasrvc.getCities(route.params.name);
  }
}