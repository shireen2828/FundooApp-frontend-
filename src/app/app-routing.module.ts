import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { LoginComponent } from './Pages/login/login.component';
import { ForgetpasswordComponent } from './Pages/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './Pages/resetpassword/resetpassword.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
