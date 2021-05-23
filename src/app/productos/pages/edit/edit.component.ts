import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  constructor( private productService: ProductosService) { }

  ngOnInit(): void {
  }

  actualizar(termino : string){
    console.log(termino);
    this.productService.search( termino ).subscribe();
  }
}
