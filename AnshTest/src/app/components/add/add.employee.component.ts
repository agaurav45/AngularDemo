import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

import { EmployeeService } from '../../services/employee.service';
import {AddEmployeeModel} from "../../models/add.employee.model";

@Component({
	selector: 'add-employee',
	templateUrl: './add.employee.component.html',
	styleUrls: ['./add.employee.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AddEmployeeComponent {
	addEmp: AddEmployeeModel = new AddEmployeeModel();

	constructor(public employeeService: EmployeeService, public router: Router) {
		
	}

	ngOnInit() {
	}

	addEmployee() {
		this.employeeService.addData(this.addEmp);
		this.router.navigate(['employees']);
	}
  
}
