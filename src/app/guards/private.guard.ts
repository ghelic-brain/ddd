import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from '../servicios/user.service';

@Injectable({
  providedIn: 'root'
})
export class PrivateGuard implements CanActivate {

	constructor(
		private service:UserService,
		private router:Router
	){}

	canActivate(
		next: ActivatedRouteSnapshot,
	    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
	    if (this.service.tokenVerify()) {
	    	return true;
	    }else{
	    	console.log('okll');
	    	this.router.navigate(['/inicioSesion']);
	    	return false;
	    }
	}

  
}
