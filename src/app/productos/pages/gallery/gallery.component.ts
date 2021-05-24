import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  productos: Producto[] = [];

  constructor( private productService: ProductosService) { 
    this.productService.getProductos().subscribe(
      (data : any) => {
        this.productos = data;                       
      }
    );  
  }

  ngOnInit(): void {

  }
  
}
