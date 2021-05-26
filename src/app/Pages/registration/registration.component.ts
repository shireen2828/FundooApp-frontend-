import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formbuilder: FormBuilder) { 

    this.registrationForm = this.formbuilder.group({

      firstname: new FormControl ('', [Validators.required,
        Validators.pattern('^[A-Z][a-z]{2,}$')
       ],),
      lastname: new FormControl ('', [Validators.required, 
        Validators.pattern('^[A-Z][a-z]{2,}$')
      ],),
      email: new FormControl ('', [Validators.required, 
        Validators.pattern('^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*$')
      ]),
      password: new FormControl ('',  [Validators.required, 
        Validators.pattern('^(?=.{8,20}$)(?=.*[\\d])(?=.*[A-Z])[\\w]*[\\W][\\w]*$')
      ]),
      confirm: new FormControl ('', [Validators.required,
        Validators.pattern('^(?=.{8,20}$)(?=.*[\\d])(?=.*[A-Z])[\\w]*[\\W][\\w]*$')
      ])
  
    });

  }

  ngOnInit(): void {
  }
  

}
 