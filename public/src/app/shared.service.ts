import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class SharedService {

	questionList = [];

	userList = [];	

	contestant = {
		name:"",
		result:""
	}
	constructor(private _http: Http) { }

	create(add){
		this._http.post('/new_question', add)
		.subscribe()
		// this.questionList.push(add);
		// console.log(this.questionList);
	}
}
