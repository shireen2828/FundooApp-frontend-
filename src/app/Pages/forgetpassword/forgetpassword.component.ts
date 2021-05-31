import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/userService/user-service.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetform: FormGroup;
  hide=true;

  constructor(private formbuilder: FormBuilder, public userservice: UserServiceService) {
    this.forgetform = this.formbuilder.group({
      Email: new FormControl ('', [Validators.required, 
        Validators.pattern('^[a-zA-Z0-9+_-]+(?:\\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9]+(?:\\.[a-zA-Z]{2,}){1,2}$')
      ])
    });
  }

  ngOnInit(): void {
  }

  forget = () => {
    let data = {
      "Email": this.forgetform.controls.Email.value
    }

    this.userservice.forget(data).subscribe((result => {
      console.log((result));
    })) 
  }

}
