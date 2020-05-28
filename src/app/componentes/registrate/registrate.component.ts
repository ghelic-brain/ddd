import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegistroUsuario } from '../../models/modelos.acceso';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css'],
  providers:[UserService]
})
export class RegistrateComponent implements OnInit {

  public Data:RegistroUsuario;
  constructor(
    private service :UserService,
    private router:Router
  ) {
    this.Data = new RegistroUsuario();
  }

  ngOnInit() {
    console.log(this.Data);
  }
   
  onSubmit() {
    this.Data.roles="Poster";
    this.service.newUser(this.Data).subscribe(
      result => {
        let datos=result.dataUser; 
        var tokenDatos=JSON.stringify(datos.data);
        localStorage.setItem('tokenCha',datos.accessToken);
        localStorage.setItem('userData',tokenDatos);

        this.router.navigate(['/foro']);
      },
      err => {
        alert('error');
        console.log(err);
      }

    );
  }

}
