import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material";
import { ActivatedRoute } from '@angular/router';
import * as config from '../config';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class gridComponent implements OnInit {
  displayedColumns = ["name", "base", "timezone", "visibility"];
  dataSource: any;
  searchText:string = "";
  city_name: string;
 

  constructor(private route: ActivatedRoute) {
    this.city_name = route.snapshot.params.name;
  }

  ngOnInit() {
    debugger;
    config.cityByWeatherDetails.push(this.route.snapshot.data.gridResolver);
    this.dataSource = new MatTableDataSource(config.cityByWeatherDetails);
    }
  

   getSearchData(filterValue){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    this.searchText = filterValue;
   }



  closeSearch() {
    
    this.searchText = '';
    this.dataSource = new MatTableDataSource(config.cityByWeatherDetails);
  }

}


