import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddgameComponent } from './components/addgame/addgame.component';
import { CommunityComponent } from './components/community/community.component';
import { HomeComponent } from './components/home/home.component';
import { ListgamesComponent } from './components/listgames/listgames.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/authguard.guard';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'listgames',component:ListgamesComponent ,  canActivate: [AuthGuard]},
  {path:'addgames',component:AddgameComponent , canActivate: [AuthGuard]} ,
  {path:'community',component:CommunityComponent, canActivate: [AuthGuard]},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
