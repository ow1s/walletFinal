import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroTitularComponent } from './components/registro-titular/registro-titular.component';
import { DashboardAdminComponent }  from './components/dashboard-admin/dashboard-admin.component';
import { ListadoTitularesComponent }  from './components/listado-titulares/listado-titulares.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { IndexUsuarioComponent } from './components/index-usuario/index-usuario.component';
import { MovimientosUsuarioComponent } from './components/movimientos-usuario/movimientos-usuario.component';
import { TransferenciaUsuarioComponent } from './components/transferencia-usuario/transferencia-usuario.component';
import { GestorDebitarComponent } from './components/gestor-debitar/gestor-debitar.component';
import { GestorAcreditarComponent } from './components/gestor-acreditar/gestor-acreditar.component';
import { GestorIndexComponent } from './components/gestor-index/gestor-index.component';
import { LoginGestorComponent } from './components/login-gestor/login-gestor.component';
import { ListaMovimientosComponent } from './components/lista-movimientos/lista-movimientos.component';


const routes: Routes = [
  { path: 'registroTitular', component: RegistroTitularComponent},
    { path: 'dash-board', component: DashboardAdminComponent},
    { path: 'listaTitulares', component: ListadoTitularesComponent},
    { path: 'login', component: LoginComponent},
    {path:'', component: IndexComponent},
    {path:'indexUsuario', component: IndexUsuarioComponent},
    {path:'movimientosUsuario', component:MovimientosUsuarioComponent},
    {path:'transferenciaUsuario',component:TransferenciaUsuarioComponent},
    {path:'gestorIndex',component:GestorIndexComponent},
    {path:'gestorAcreditar',component:GestorAcreditarComponent},
    {path:'gestorDebitar',component:GestorDebitarComponent},
    {path: 'gestorLogin', component: LoginGestorComponent},
    {path: 'listadoMovimientos',component: ListaMovimientosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
