import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-trivia',
	templateUrl: './trivia.component.html',
	styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

	playQuestions= []

	answer= {
		attempt:"",
		user: this._sharedService.contestant.name,
		result:"",
	}
	constructor(private _sharedService: SharedService,  private router: Router) {
		for(let i = 0; i < 3; i++){
			this.playQuestions.push(this._sharedService.questionList[Math.floor(Math.random() * this._sharedService.questionList.length)])
		}
		console.log(this.playQuestions);
	}

	ngOnInit() {
	}

	onSubmit(){
		console.log('got here')
		if(this.answer.attempt === 'A,A,A'){
			this.answer.result='Success!';
			console.log(this.answer.result);
		}else{
			this.answer.result='Failure!'
		}

		this._sharedService.userList.push(this.answer);
		this.router.navigate(['']);
	}

}
