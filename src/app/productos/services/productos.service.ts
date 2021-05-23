import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string = environment.baseUrl;
  public productos: Producto[] = [];
  
  get usuario(){
    return this.authService.usuario;
  }


  constructor( private http : HttpClient,
    private authService: AuthService) { }



  crear(producto : Producto)  {

    const user = this.usuario.uid;
    const url = `${ this.baseUrl }/product/${ user }`;
    const headers = new HttpHeaders()
    .set('x-token', localStorage.getItem('token' || '') )
   
    return this.http.post(url , {
      ...producto,
      user
    }, { headers } );
  }

  getCategories() {
    const url = `${ this.baseUrl }/categories/`;
    return this.http.get( url);
  }

  getProductos() {
    const url = `${ this.baseUrl }/product/`;

    return this.http.get( url ).pipe(
      map( data => { 
         return this.productos = data['products'];
      })
    );
  }

  
  search(termino: string) {
    const url = `${ this.baseUrl }/search/${ termino }`;
    
    return this.http.get( url ).pipe(
      map( data => { 
        console.log(data);
         
        
      })
    );
  }

}
