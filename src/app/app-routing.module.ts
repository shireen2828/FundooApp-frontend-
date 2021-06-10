import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { LoginComponent } from './Pages/login/login.component';
import { ForgetpasswordComponent } from './Pages/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './Pages/resetpassword/resetpassword.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { CreatenotesComponent } from './Component/Notes/createnotes/createnotes.component';
import { DisplaynoteComponent } from './Component/Notes/displaynote/displaynote.component';
import { UpdateComponent } from './Component/update/update.component';
import { IconsComponent } from './Component/icons/icons.component';
import { AuthguardGuard } from './authguard.guard';
import { GetnotesComponent } from './Component/getnotes/getnotes.component';
import { TrashComponent } from './Component/trash/trash.component';
import { ArchiveComponent } from './Component/archive/archive.component';

const routes: Routes = [
  { path: '', redirectTo:"/login", pathMatch: 'full'},
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthguardGuard], 
  
  children: [
    {path: "", redirectTo: "getnotes", pathMatch: "full"},
    {path: 'getnotes', component: GetnotesComponent},
    {path: 'trash', component: TrashComponent},
    {path: 'archive', component: ArchiveComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
