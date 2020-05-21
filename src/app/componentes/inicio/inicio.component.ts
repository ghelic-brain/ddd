import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public title:String;
  public subtitle:String;
  public img;
  constructor() { 
  	this.title="chamberpost";
  	this.subtitle="nos reservamos los derechos de copyright en cualquier cosa que salga";
  	

  }

  ngOnInit() {
  }

}
