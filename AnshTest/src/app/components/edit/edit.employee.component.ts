import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";


@Component({
  selector: 'edit-employee',
  templateUrl: './edit.employee.component.html',
  styleUrls: ['./edit.employee.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditEmployeeComponent {


  constructor(public router: Router,private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

  
}
