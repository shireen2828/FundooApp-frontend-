import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { LoginComponent } from './Pages/login/login.component';
import { ForgetpasswordComponent } from './Pages/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './Pages/resetpassword/resetpassword.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
