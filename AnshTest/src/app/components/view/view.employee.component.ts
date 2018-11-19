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
	public searchValue:String = '';

	constructor(public employeeService: EmployeeService, public router: Router) {

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
  
	addNewEmp() {
		this.router.navigate(['employees/add']);
	}
	
	editEmp(employee) {
		this.router.navigate(['employees/edit', employee.id]);
	}
	
}
