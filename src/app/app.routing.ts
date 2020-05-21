import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { LineasComponent } from './componentes/lineas/lineas.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ErrorComponent } from './componentes/error/error.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { RegistrateComponent } from './componentes/registrate/registrate.component';

const appRoutes: Routes = [
	{path: '',component:InicioComponent},
	{path: 'inicio',component:InicioComponent},
	{path: 'foro',component:ForoComponent},
	{path: 'lineas',component:LineasComponent},
	{path: 'contacto',component:ContactoComponent},
	{path: 'inicioSesion',component:InicioSesionComponent},
	{path: 'registrate',component:RegistrateComponent},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
