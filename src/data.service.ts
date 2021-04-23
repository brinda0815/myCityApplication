import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'rxjs/Rx';
import { Router } from '@angular/router';


@Injectable()
export class dataService {
    constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router) { }

    getCities(cityName: string) {
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=1ab778789fe927933e658582010639cd";
        return this.http.get(url).catch(error => {
            return this.handleError(error);
        });
    }

    handleError(error: Response) {
        if (error.status == 500) {
            this.router.navigate(['/']);
        } else {
            this._snackBar.open("Please Select different City for Weather broadcasting.", "OK", {
                horizontalPosition: "center",
                verticalPosition: "top",
            });
            this.router.navigate(['/']);
            return Observable.throw(error);
        }
    }

}

