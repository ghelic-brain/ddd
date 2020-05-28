import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { LineasComponent } from './componentes/lineas/lineas.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ErrorComponent } from './componentes/error/error.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { RegistrateComponent } from './componentes/registrate/registrate.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

//guards
import { PrivateGuard } from './guards/private.guard';
import { UnregistredGuard } from './guards/unregistred.guard';
import { AdminGuard } from './guards/admin.guard';

const appRoutes: Routes = [
	{path: '',component:InicioComponent},
	{path: 'inicio',component:InicioComponent},
	{path: 'foro',component:ForoComponent,canActivate:[PrivateGuard]},
	{path: 'lineas',component:LineasComponent,canActivate:[PrivateGuard]},
	{path: 'contacto',component:ContactoComponent,canActivate:[PrivateGuard]},
	{path: 'perfil',component:PerfilComponent,canActivate:[PrivateGuard]},
	{path: 'inicioSesion',component:InicioSesionComponent,canActivate:[UnregistredGuard]},
	{path: 'registrate',component:RegistrateComponent,canActivate:[UnregistredGuard]},
	{path: '**', redirectTo:'inicio'}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
