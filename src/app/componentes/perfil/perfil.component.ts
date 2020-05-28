import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

	private data:Object;

  	constructor(private router:Router) {
  		
  	}

  	ngOnInit() {
  		this.data = JSON.parse(localStorage.getItem('userData'))

  	}
  	salir(){
  		if (confirm('deseas cerrar sesion?')) {
  			localStorage.removeItem('tokenCha');
  			localStorage.removeItem('userData');
  			this.router.navigate(['/inicio']);
  		}
  	}

}
