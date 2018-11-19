import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";


@Component({
  selector: 'add-employee',
  templateUrl: './add.employee.component.html',
  styleUrls: ['./add.employee.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddEmployeeComponent {


  constructor(public router: Router,private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

  
}
