import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService {
	
	dummyJson = {"data": [{"id": 1,"name": "Jhon","phone": "9999999999","address":{"city": "Pune",
							"address_line1":"ABC road","address_line2":"XYZ building","postal_code":"12455"}
						}, {"id": 2,"name": "Jacob","phone": "AZ99A99PQ9","address":{"city": "Pune",
							"address_line1":"PQR road","address_line2":"ABC building","postal_code":"13455"}
						}, {"id": 3,"name": "Ari","phone": "145458522","address":{"city": "Mumbai","address_line1":"ABC road",
							"address_line2":"XYZ building","postal_code":"12455"}
						}]
				}
				
				
	getData() {
		return this.dummyJson.data;
	}	

	addData(value) {
		this.dummyJson.data.push(value);
	}
	
}