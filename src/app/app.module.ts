import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { RegistroTitularComponent } from './components/registro-titular/registro-titular.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ListadoTitularesComponent } from './components/listado-titulares/listado-titulares.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { IndexUsuarioComponent } from './components/index-usuario/index-usuario.component';
import { TransferenciaUsuarioComponent } from './components/transferencia-usuario/transferencia-usuario.component';
import { MovimientosUsuarioComponent } from './components/movimientos-usuario/movimientos-usuario.component';
import { GestorIndexComponent } from './components/gestor-index/gestor-index.component';
import { GestorAcreditarComponent } from './components/gestor-acreditar/gestor-acreditar.component';
import { GestorDebitarComponent } from './components/gestor-debitar/gestor-debitar.component';
import { LoginGestorComponent } from './components/login-gestor/login-gestor.component';
import { ListaMovimientosComponent } from './components/lista-movimientos/lista-movimientos.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    RegistroTitularComponent,
    ListadoTitularesComponent,
    LoginComponent,
    IndexComponent,
    IndexUsuarioComponent,
    TransferenciaUsuarioComponent,
    MovimientosUsuarioComponent,
    GestorIndexComponent,
    GestorAcreditarComponent,
    GestorDebitarComponent,
    LoginGestorComponent,
    ListaMovimientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
