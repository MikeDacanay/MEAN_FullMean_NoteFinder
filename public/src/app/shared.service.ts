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
	}

	addContestant(contestant){
		this._http.post('/contestant', contestant)
		.subscribe()
	}

	retrieveTrivias(callback){
		this._http.get('/trivias')
		.subscribe(data=>{
			// console.log(data);
			this.questionList = data.json();
			// console.log(this.questionList);
			//implement a callback here to fix timing on home.comp
			callback(this.questionList);
		})
	}
}
