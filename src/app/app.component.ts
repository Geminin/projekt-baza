import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'projekt-baza';
  constructor(public authService :AuthService) { }

  ngOnInit() {
  }



  checkLogin(){
    //console.log(localStorage.getItem('user'));
    if(localStorage.getItem('user')!=null && localStorage.getItem('user')!='null'){
      //console.log('true');
      return true;
    }
    else
    {
      return false;
    }
  }

  logOut(){
    this.authService.SignOut();
    this.authService.SignOut();
  }

  checkAdminRights(){
    if(localStorage.getItem('isAdmin')==='true'){
      return true;
    }
    else{
      return false;
    }
  }

}
