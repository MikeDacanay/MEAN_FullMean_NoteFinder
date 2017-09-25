import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	player = {
		user:""
	}

	constructor(private _sharedService: SharedService, private router: Router) { }

	ngOnInit() {
	}

	onSubmit(){
		this._sharedService.contestant.name= this.player.user;
		this.router.navigate(['/lets_play'])
	}
}
