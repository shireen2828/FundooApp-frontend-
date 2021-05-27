import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  hide=true;
    

  constructor(private formbuilder: FormBuilder) { 

    this.loginform = this.formbuilder.group({

      Email: new FormControl('', [Validators.required, Validators.minLength(8), 
        Validators.pattern('^[a-zA-Z0-9+_-]+(?:\\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9]+(?:\\.[a-zA-Z]{2,}){1,2}$')
      ]),
      Password: new FormControl('', [Validators.required, Validators.minLength(8), 
        Validators.pattern('^(?=.{8,20}$)(?=.*[\\d])(?=.*[A-Z])[\\w]*[\\W][\\w]*$')
      ])
  
    });
  
   

      

  }

  ngOnInit(): void {
  }

}
