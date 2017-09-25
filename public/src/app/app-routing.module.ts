import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateQuestionComponent } from './create-question/create-question.component'; 
import { HomeComponent } from './home/home.component';
import { TriviaComponent } from './trivia/trivia.component';  
const routes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'new_question', pathMatch: 'full', component: CreateQuestionComponent },
	{ path: 'lets_play', pathMatch: 'full', component: TriviaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
