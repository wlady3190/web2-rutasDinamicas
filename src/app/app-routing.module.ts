import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { Error404Component } from './screens/error404/error404.component';
import { DetallesComponent } from './screens/detalles/detalles.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'detalles/:id', component: DetallesComponent},

  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
