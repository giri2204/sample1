import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(){
    console.log('I am checking to see if u are logged in');
    this.router.navigateByUrl('/login');
        return true;
  }
  
}
