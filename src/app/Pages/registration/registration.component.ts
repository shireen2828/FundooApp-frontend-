import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      firstname: ['',[Validators.required, Validators.pattern("^[A-Z][a-z]{2,}$")]],
      lastname: ['',[Validators.required, Validators.pattern("^[A-Z][a-z]{2,}$")]],
      email: ['',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_-]+(?:\\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9]+(?:\\.[a-zA-Z]{2,}){1,2}$")]],
      password: ['',[Validators.required,Validators.pattern("^(?=.*[0-9])" + "(?=.*[a-z])(?=.*[A-Z])" + "(?=.*[@#$%^&+=])" + "(?=\\S+$).{8,}$")]],
      confirm: ['',Validators.required] 
    },{ Validator: this.checkPassword });
  }
  checkPassword(group: FormGroup) {
    let pword = group.controls.password.value;
    let confirmP = group.controls.confirm.value;
    return pword === confirmP ? null : { notSame: true}
  }

  public hasError=(controlName:string,errorname:string) =>{
    return this.registerForm.controls[controlName].hasError(errorname);
   }
 }