import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { HomeComponent } from './screens/home/home.component';
import { Error404Component } from './screens/error404/error404.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { DetallesComponent } from './screens/detalles/detalles.component';
import { KevinComponent } from './screens/kevin/kevin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductosComponent,
    HomeComponent,
    Error404Component,
    FormularioComponent,
    TablaComponent,
    DetallesComponent,
    KevinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Petciones http 
    FormsModule //Formularios responsivo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
