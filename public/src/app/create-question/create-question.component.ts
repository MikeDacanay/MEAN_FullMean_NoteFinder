import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
	selector: 'app-create-question',
	templateUrl: './create-question.component.html',
	styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
	newQuestion= {
		question:"",
		correct:"",
		fake1:"",
		fake2:""
	}
	constructor(private _sharedService: SharedService) { }

	ngOnInit() {
	}

	onSubmit(){
		if(this.newQuestion.question.length > 15 &&
			this.newQuestion.correct.length > 0 &&
			this.newQuestion.fake1.length > 0 &&
			this.newQuestion.fake2.length > 0){
				this._sharedService.create(this.newQuestion);
				this.newQuestion= {
					question:"",
					correct:"",
					fake1:"",
					fake2:""
				}
			}
	}
}

