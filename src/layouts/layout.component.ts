import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as config from '../config';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {

  public cities: any;
  isDisabled: boolean = true;
  selectedOptions: string[] = [];


  constructor(private r: Router) { }

  ngOnInit() {
    this.getCitiesData();
  }

  onNgModelChange(data) {
    if (data.length > 0) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  getCitiesData() {
    // this.layout.getCities().subscribe(
    //   data => { this.showLoader = false;this.cities = data },
    //   err => console.log(err),
    //   () => console.log('done loading cities')
    // );
    this.cities = config.citiFields;
  }


  Submit(data) {
    if (data.length > 0) {
      let name = this.selectedOptions.toLocaleString();
      this.r.navigate(['/grid', name]);
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

}