import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/userService/user-service.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetform: FormGroup;
  hide = true;

  constructor(private formbuilder: FormBuilder, public userservice: UserServiceService) {

    this.resetform = this.formbuilder.group({
      
      newPassword:  new FormControl('', [Validators.required, 
        Validators.pattern('^(?=.{8,20}$)(?=.*[\\d])(?=.*[A-Z])[\\w]*[\\W][\\w]*$')
      ]),
      confirmPassword:  new FormControl('', [Validators.required, 
      ])

    });
   }

  ngOnInit(): void {
  }

  reset = () => {
    let data = {
      "newPassword": this.resetform.controls.newPassword.value,
      "ConfirmPassword": this.resetform.controls.ConfirmPassword.value
      }

      this.userservice.reset(data).subscribe((result) => {
        console.log((result));
      })
      
    }
  }

