import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsComponent } from './components/news/news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsernavbarComponent } from './components/usernavbar/usernavbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddgameComponent } from './components/addgame/addgame.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ListgamesComponent } from './components/listgames/listgames.component';
import { CommunityComponent } from './components/community/community.component';
import { HttpClientModule } from '@angular/common/http';
import { GamesComponent } from './components/games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NewsComponent,
    NavbarComponent,
    UsernavbarComponent,
    PageNotFoundComponent,
    AddgameComponent,
    FeedbackComponent,
    ListgamesComponent,
    CommunityComponent,
    GamesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
