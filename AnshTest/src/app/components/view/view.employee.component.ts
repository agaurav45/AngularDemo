import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'view-employee',
  templateUrl: './view.employee.component.html',
  styleUrls: ['./view.employee.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class ViewEmployeeComponent {
	
	public empList: any = [];

  constructor(public employeeService: EmployeeService, public public router: Router,private route: ActivatedRoute) {

  }

  ngOnInit() {
	let data = this.employeeService.getData();
	data.forEach((value)=> {
		if(value.phone.match(/[^$,.\d]/)) {
			value.phone = 'NA';
		}
		this.empList.push(value);
	});
  }

  
}
