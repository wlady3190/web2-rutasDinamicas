import { Component } from '@angular/core';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  constructor( private servicio: FireService){}

  dataProducto: any;

  ngOnInit(){
    this.servicio.getProductos().subscribe( item =>{
      this.dataProducto = item
      this.dataProducto = Object.values(this.dataProducto)
    })
  }

}
