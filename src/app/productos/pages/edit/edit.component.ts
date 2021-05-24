import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  productos: Producto[] = [];
  constructor( private productService: ProductosService) { }

  ngOnInit(): void {
  }

  actualizar(termino : string){
    if (termino) {
      this.productService.search( termino ).subscribe( data => {
        this.productos = data;
        console.log(data);     
      });
    } else {
      this.productos = [];
    }

  }
}
