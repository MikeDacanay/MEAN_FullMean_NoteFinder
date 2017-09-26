import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-trivia',
	templateUrl: './trivia.component.html',
	styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
	playQuestionsfilter = [];
	playQuestions= [];

	answer= {
		attempt:"",
		user: this._sharedService.contestant.name,
		result:"",
	}
	constructor(private _sharedService: SharedService,  private router: Router) {
		// for(let i = 0; i < 3; i++){
		// 	this.playQuestions.push(this._sharedService.questionList[Math.floor(Math.random() * this._sharedService.questionList.length)])
		// }
		// console.log(this.playQuestions); //TESTING FRONT END WITH THIS
		this.getTrivias();
		// for(let i = 0; i < this.playQuestionsfilter.length; i++){
		// 	if(this.playQuestionsfilter[i].question){
		// 		this.playQuestions.push(this.playQuestionsfilter[i]);
		// 	}
		}

	ngOnInit() {
	}

	onSubmit(){
		// console.log('got here')
		if(this.answer.attempt === 'A,A,A'){
			this.answer.result='Success!';
			// console.log(this.answer.result);
		}else{
			this.answer.result='Failure!'
		}

		this._sharedService.addContestant(this.answer);

		this._sharedService.userList.push(this.answer);
		this.router.navigate(['']);
	}

	getTrivias(){
		this._sharedService.retrieveTrivias((trivias)=>{
			this.playQuestionsfilter= trivias;

		    for (let i = this.playQuestionsfilter.length - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var temp = this.playQuestionsfilter[i];
		        this.playQuestionsfilter[i] = this.playQuestionsfilter[j];
		        this.playQuestionsfilter[j] = temp;
		    }
		    // ^ above is to randomize the questions

			for(let i = 0; i < this.playQuestionsfilter.length; i++){
				if(this.playQuestionsfilter[i].question){
					this.playQuestions.push(this.playQuestionsfilter[i]);
				}
			}
			// ^ above is to retrieve only questions from collectiosn to show in template
		})
	}
}
