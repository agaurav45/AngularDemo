import { Pipe, PipeTransform } from '@angular/core';

 
@Pipe({ name: 'searchResult' })


export class SearchPipe implements PipeTransform {
	transform(value, search: string) {
	
		let keys = Object.keys(search)[0];
        let filterText = search[keys].trim();
		
		if (filterText.length < 1) {
            return value;
        } else {
			let filterKeys = keys.split(",");
			return value.filter(function (item) {
				let isMatch = false;
				let count = 0;
                for (count = 0; count < filterKeys.length; count++) {
					isMatch = item[filterKeys[0]].toLowerCase().indexOf(filterText.toLowerCase()) !== -1 
						|| item.address[filterKeys[1]].toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ;
					if (isMatch) {
						 break;
					}
				};
				return isMatch;
			});

		}

	}	
	
}