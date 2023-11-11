import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor( private http: HttpClient) { }

  private API_FIRE = 'https://web2-72b45-default-rtdb.firebaseio.com/productos.json'

  //GET
  getProductos():Observable <any>{
    return this.http.get(this.API_FIRE)
  }

  //POST
  postProdctos( producto :any ):Observable <any>{
    return this.http.post(this.API_FIRE, producto)
  }

}
