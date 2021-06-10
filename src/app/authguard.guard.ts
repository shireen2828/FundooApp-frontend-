import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardserviceService } from './Services/authguardservice.service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor( private authguardservice: AuthguardserviceService, private router: Router) {}

  canActivate(): boolean
  {
    if (!this.authguardservice.getToken()){
      this.router.navigate(['/login']);
    }
    return this.authguardservice.getToken()
  }
  
}
