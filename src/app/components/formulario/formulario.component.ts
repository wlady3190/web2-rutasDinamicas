import { Component } from '@angular/core';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor( private servicio: FireService ){}

  id: any;
  producto: any;
  precio: any;

  limpiar(){

  }

  guardarProducto( producto: any ){
    console.log( producto.value )
    this.servicio.postProdctos( producto.value ).subscribe()
    this.limpiar()
  }



}
