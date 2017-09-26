import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	listPlayers=[]

	player = {
		user:""
	}

	constructor(private _sharedService: SharedService, private router: Router) {
		this.getContestants();
	}

	ngOnInit() {
	}

	onSubmit(){
		this._sharedService.contestant.name= this.player.user;
		this.router.navigate(['/lets_play'])
	}

	getContestants(){
		this._sharedService.retrieveTrivias((trivias)=>{
			var temp = [];
			temp=trivias;

			for(let i = 0; i < temp.length; i++){
				if(temp[i].user){
					this.listPlayers.push(temp[i]);
				}
			}
		})	
	}
}