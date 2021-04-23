import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import{User} from 'backend/models/user'

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent implements OnInit {
  currentUser: User;


  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService) 
   {
        this.currentUser = this.authService.currentUserValue;
        console.log("currentUser", this.currentUser);
    }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.isUserAuth();
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      }
    )
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

}
