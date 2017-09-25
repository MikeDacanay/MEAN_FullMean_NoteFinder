import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'; // <--- Routing rules imported
import { AppComponent } from './app.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { SharedService } from './shared.service';
import { HomeComponent } from './home/home.component';
import { TriviaComponent } from './trivia/trivia.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionComponent,
    HomeComponent,
    TriviaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
