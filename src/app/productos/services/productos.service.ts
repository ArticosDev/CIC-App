import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string = environment.baseUrl;
  private producto: Producto;


  constructor( private http : HttpClient) { }

  crear(producto : Producto )  {

    const url = `${ this.baseUrl }/product/`;
    const body = { name , email, password };

    return this.http.post<AuthResponse>(url , body )
    .pipe(
      tap( resp => {
        if ( resp.ok ) {
          localStorage.setItem('token', resp.token );
        }
      } ),
      map( resp => resp.ok ),
      catchError( err => of(err.error.msg) )

    );

  }

}
