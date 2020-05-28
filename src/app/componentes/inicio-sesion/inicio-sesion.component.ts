import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IngresoUsuario } from '../../models/modelos.acceso';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
  providers:[UserService]
})
export class InicioSesionComponent implements OnInit {

  public Data:IngresoUsuario;
  
  constructor(
    private service:UserService,
    private router:Router
  ) {
  	this.Data = new IngresoUsuario();
  }

  ngOnInit() {
  }

  onSubmit(){
    this.service.loginUser(this.Data).subscribe(
      result =>{
        let datos=result.dataUser; 
        var tokenDatos=JSON.stringify(datos.data);
        localStorage.setItem('tokenCha',datos.accessToken);
        localStorage.setItem('userData',tokenDatos);

        this.router.navigate(['/foro']);
      },
      err => {alert('error: ');console.log(err.error)}
    );
  }
}
