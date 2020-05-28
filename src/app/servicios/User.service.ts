import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { RegistroUsuario, IngresoUsuario } from './../models/modelos.acceso';
import { Global } from './global';

@Injectable()
export class UserService{
	private url:string;
	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	newUser(user:RegistroUsuario):Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type','application/json');
		return this._http.post(this.url+'/register',params,{headers:headers});
	}

	loginUser(auth:IngresoUsuario):Observable<any>{
		let params = JSON.stringify(auth);
		let headers = new HttpHeaders().set('Content-Type','application/json');
		return this._http.post(this.url+'/login',params,{headers:headers});
	}

	logoutUser():Observable<any>{

		let headers = new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'/logout',{headers:headers});

	}

	tokenVerify():any{
		if(localStorage.getItem('tokenCha')){
			return true;
		}else{
			return false;
		}
		
	}

}
