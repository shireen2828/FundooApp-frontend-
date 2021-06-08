import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/userService/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  hide=true;
  public isActive: boolean;
  public notSame: boolean;
    

  constructor(private formbuilder: FormBuilder, public userservice: UserServiceService, public snackbar: MatSnackBar, private route: Router) { 

    this.loginform = this.formbuilder.group({

      Email: new FormControl ('', [Validators.required, 
        Validators.pattern('^[a-zA-Z0-9+_-]+(?:\\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9]+(?:\\.[a-zA-Z]{2,}){1,2}$')
      ]),
      Password: new FormControl('', [Validators.required, Validators.minLength(8), 
        Validators.pattern('^(?=.{8,20}$)(?=.*[\\d])(?=.*[A-Z])[\\w]*[\\W][\\w]*$')
      ])
  
    });
    this.isActive = true;
    this.notSame = false;
  
  }

  openSnackBar(message: string, duration: number){
    let config = new MatSnackBarConfig();
    if (duration != 0){
      config.duration = duration;
    }
    this.snackbar.open(message, undefined, config);
  }

  TogglePassword() {
    this.isActive = this.isActive ? true : false
  }

  ngOnInit(): void {
  }

  login = () => {
    if(this.loginform.valid){
      this.openSnackBar('logging in...', 0);
    }
    let data = {
      "Email": this.loginform.controls.Email.value,
      "Password": this.loginform.controls.Password.value
    }

    this.userservice.login(data).subscribe((result:any) => {
      console.log(result);
      localStorage.setItem('token', result['data']);
      // localStorage.setItem('token',result);
      console.log(localStorage.getItem('token'));
      localStorage.setItem('userId', result['result'].userId)
      this.openSnackBar('log in successfull', 2000)
      this.route.navigate(['/dashboard']);
    },
    (error:any) => {
      if(error['status'] == 0){
        this.openSnackBar('log in failed: server offline', 2000)
      }
      else{
        this.openSnackBar('log in failed: ' +error['error']['message'], 2000)
      }
    }
    );
  }

}
