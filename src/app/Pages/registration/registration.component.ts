import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/userService/user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  hide = true;
  public isActive: boolean;
  public notSame: boolean;

  constructor(private formbuilder: FormBuilder, public service: UserServiceService) { 

    this.registrationForm = this.formbuilder.group({

      FirstName: new FormControl ('', [Validators.required,Validators.minLength(3),
        Validators.pattern('^[A-Z][a-z]{2,}$')
       ],),
      LastName: new FormControl ('', [Validators.required, Validators.minLength(3),
        Validators.pattern('^[A-Z][a-z]{2,}$')
      ],),
      Email: new FormControl ('', [Validators.required, 
        Validators.pattern('^[a-zA-Z0-9+_-]+(?:\\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9]+(?:\\.[a-zA-Z]{2,}){1,2}$')
      ]),
      Password: new FormControl ('',  [Validators.required, Validators.minLength(8), 
        Validators.pattern('^(?=.{8,20}$)(?=.*[\\d])(?=.*[A-Z])[\\w]*[\\W][\\w]*$')
      ]),
      Confirm: new FormControl ('', [Validators.required,
        Validators.pattern('^(?=.{8,20}$)(?=.*[\\d])(?=.*[A-Z])[\\w]*[\\W][\\w]*$')
      ])
  
    },{ Validators: this.checkPassword });

    this.isActive = true;
    this.notSame = false;

  }

  TogglePassword() {
    this.isActive = this.isActive ? true : false
  }

  checkPassword(group: FormGroup){
    var pword = group.controls.Password.value;
    var cpword = group.controls.Confirm.value;

    return pword === cpword ? null : {notSame:true}
  }
  
  ngOnInit(): void {
    
  }
  
  register = () => {
    let data ={
      "FirstName": this.registrationForm.controls.FirstName.value,
      "LastName": this.registrationForm.controls.LastName.value,
      "Email": this.registrationForm.controls.Email.value,
      "Password": this.registrationForm.controls.Password.value
    }

    this.service.registration(data).subscribe((result) => {
      console.log(result);
    })
  }
}
 