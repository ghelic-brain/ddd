import { Component, OnInit } from '@angular/core';

import { IngresoUsuario } from '../../models/modelos.acceso';
import { UserService } from '../../servicios/User.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
  providers:[UserService]
})
export class InicioSesionComponent implements OnInit {

  public Data:IngresoUsuario;
  
  constructor(private service:UserService) {
  	this.Data = new IngresoUsuario();
  }

  ngOnInit() {
  }

  onSubmit(){
    this.service.loginUser(this.Data).subscribe(
      result =>{ 
        alert('result: ');
        console.log(result);
      },
      err => {alert('error: ');console.log(err.error)}
    );
  }
}
