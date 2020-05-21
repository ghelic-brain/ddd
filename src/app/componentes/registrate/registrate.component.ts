import { Component, OnInit } from '@angular/core';

import { RegistroUsuario } from '../../models/modelos.acceso';
import { UserService } from '../../servicios/User.service';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css'],
  providers:[UserService]
})
export class RegistrateComponent implements OnInit {

  public Data:RegistroUsuario;
  constructor(
    private service :UserService
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
        alert('ok');
        console.log(result);
      },
      err => {
        alert('error');
        console.log(err);
      }

    );
  }

}
