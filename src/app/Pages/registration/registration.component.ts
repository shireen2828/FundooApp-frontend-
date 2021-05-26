import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  hide = true;

  constructor(private formbuilder: FormBuilder) { 

    this.registrationForm = this.formbuilder.group({

      FirstName: new FormControl ('', [Validators.required,Validators.minLength(3),
        Validators.pattern('^[A-Z][a-z]{2,}$')
       ],),
      LastName: new FormControl ('', [Validators.required, Validators.minLength(3),
        Validators.pattern('^[A-Z][a-z]{2,}$')
      ],),
      Email: new FormControl ('', [Validators.required, 
        Validators.pattern('^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*$')
      ]),
      Password: new FormControl ('',  [Validators.required, Validators.minLength(8), 
        Validators.pattern('^(?=.{8,20}$)(?=.*[\\d])(?=.*[A-Z])[\\w]*[\\W][\\w]*$')
      ]),
      Confirm: new FormControl ('', [Validators.required,
        Validators.pattern('^(?=.{8,20}$)(?=.*[\\d])(?=.*[A-Z])[\\w]*[\\W][\\w]*$')
      ])
  
    },{ Validators: this.checkPassword });

  }
  
  ngOnInit(): void {
    
  }
  checkPassword(group: FormGroup){
    var pword = group.controls.Password.value;
    var cpword = group.controls.Confirm.value;

    return pword === cpword ? null : {notSame:true}
  }
}
 