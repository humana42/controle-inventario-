import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {



  constructor(private router: Router, private _LoginService: LoginService) { }

  canLoad(route: Route): Promise<boolean> | Observable<boolean> {
    return new Promise(resolve => {
      const time = Math.floor(Date.now() / 1000).toString();
      const exp = Number(localStorage.getItem('exp')).toString();

      if (!localStorage.getItem('usuario')) {
        this.router.navigate(['/login'])
        resolve(false)
      } else {
        if (Number(localStorage.getItem('exp')) <= Math.floor(Date.now() / 1000)) {
          this.router.navigate(['/login'])
          resolve(false)
        } else {

          resolve(true)
        }
      }
    })
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(resolve => {
      const time = Math.floor(Date.now() / 1000).toString();
      const exp = Number(localStorage.getItem('exp')).toString();

      if (!localStorage.getItem('usuario')) {
        this.router.navigate(['/login']).then(() => { window.location.reload(); })
        resolve(false)
      } else {
        if (Number(localStorage.getItem('exp')) <= Math.floor(Date.now() / 1000)) {
          localStorage.clear();
          this.router.navigate(['/login']).then(() => { window.location.reload(); })
          resolve(false)
        } else {
          resolve(true)
        }
      }
    })
  }

}






