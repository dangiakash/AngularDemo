import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.sass']
})
export class Route1DepartmentComponent implements OnInit {

 DemoVar = '';
  
  DemoVar2 = '';
  DemoVar12 = '';
  DemoVar11 = '';
  
  
  

    
  constructor() { 
  
  DemoVar7 = '';
    DemoVar6 = '';
    DemoVar5 = '';
    DemoVar4 = '';
  }

  ngOnInit() { 
    console.log('First Error')
    console.error('Second Error')     //  red
    console.info('Third Error')
    console.warn('Fourth Error')      //  yellow
    
    DemoVar10 = '';
    DemoVar9 = '';
    DemoVar8 = '';
  }

}
