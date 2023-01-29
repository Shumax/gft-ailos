import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActiveCooperatedGuard implements CanActivate {

  constructor(private router: Router){}

  session: string  = sessionStorage.getItem('cooperated') || ''

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.session) {
        return true
      } else {
        this.router.navigate(['/'])
        return false
      }

  }
  
}
