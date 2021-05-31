import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/userService/user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  hide=true;
    

  constructor(private formbuilder: FormBuilder, public userservice: UserServiceService) { 

    this.loginform = this.formbuilder.group({

      Email: new FormControl ('', [Validators.required, 
        Validators.pattern('^[a-zA-Z0-9+_-]+(?:\\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9]+(?:\\.[a-zA-Z]{2,}){1,2}$')
      ]),
      Password: new FormControl('', [Validators.required, Validators.minLength(8), 
        Validators.pattern('^(?=.{8,20}$)(?=.*[\\d])(?=.*[A-Z])[\\w]*[\\W][\\w]*$')
      ])
  
    });
  
  }

  ngOnInit(): void {
  }

  login = () => {
    let data = {
      "Email": this.loginform.controls.Email.value,
      "Password": this.loginform.controls.Password.value
    }

    this.userservice.login(data).subscribe((result => {
      console.log(result);
    }))
  }

}
