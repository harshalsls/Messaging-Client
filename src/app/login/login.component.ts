import { Component, OnInit } from '@angular/core';
import { User} from '../common/model/user';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { DataService } from '../common/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public screenName: string;
  public isLostPassword: boolean = false;
  public UserName: string;
  public Password: string;
  returnUrl: string;
  returnMsg: string;
  public user : User;
  public onLoginPage: boolean = true;
  public loading = false;
  public userImageUrl;
  public errFun;
  public KEY_USER = 'KEY_USER';
  constructor(private loginService: LoginService, private router: Router,
    private dataService: DataService) {

  }

  ngOnInit() {

    this.user = new User();
  }



  /**
   * SR@20180130 : Call this method on click of Login Button
   */
  onLogin() {
  
    
    this.loginService.logIn(this.user).subscribe(
      res => {
       // if(this.user.userName == res.userName && this.user.password == res.password) {
        this.dataService.setData(this.KEY_USER,res)
        this.router.navigate(['./messaging']);  
   //   } else {
    //    alert("Please enter correct username and password.")
    //  }
        },
      error => {

      }
    );
  }

}
