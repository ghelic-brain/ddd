import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing ,appRoutingProviders} from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { LineasComponent } from './componentes/lineas/lineas.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ErrorComponent } from './componentes/error/error.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { RegistrateComponent } from './componentes/registrate/registrate.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ForoComponent,
    LineasComponent,
    ContactoComponent,
    ErrorComponent,
    InicioSesionComponent,
    RegistrateComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
