import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

import { EmployeeService } from '../../services/employee.service';

@Component({
	selector: 'edit-employee',
	templateUrl: './edit.employee.component.html',
	styleUrls: ['./edit.employee.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class EditEmployeeComponent {
	public empId:any = '';
	public editEmpData:any;

	constructor(public employeeService: EmployeeService, public router: Router, public route: ActivatedRoute) {
		this.empId = this.route.snapshot.params.id;
	}

	ngOnInit() {
		let data = this.employeeService.getData();
		this.editEmpData = data.find(item => item.id == this.empId);
	}

	editEmployee(editEmp) {
		this.router.navigate(['employees']);
	}
}
