import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.sass']
})
export class Route1DepartmentComponent implements OnInit {

 
  DemoTitle = "DemoTitle1";
    
  constructor() { }

  ngOnInit() { 
    console.log('First Error')
    console.error('Second Error')     //  red
    console.info('Third Error')
    console.warn('Fourth Error')      //  yellow
  }

}
