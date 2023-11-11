import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  constructor(private servicio: FireService, private ruta: ActivatedRoute){}

  dataProductos: any
  producto: any ={}
  ngOnInit(){
    this.servicio.getProductos().subscribe( item =>{
      this.dataProductos= item
      this.dataProductos = Object.values(this.dataProductos) //FireBase

      //RUTA DINÁMICA
      this.ruta.params.subscribe( ruta =>{
        console.log( ruta['id'])
         const id= ruta['id']

         for( let prod of this.dataProductos){
            if(prod.id === id){
              this.producto = prod
              break;
            }
         }
        
      })  
    })
  }

}
