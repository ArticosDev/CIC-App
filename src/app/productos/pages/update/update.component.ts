import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/productos.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  producto: Producto;
  
  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    cod: ['', [Validators.required, Validators.minLength(5)]],
    stock: ['', [Validators.required]],
    price: ['', [Validators.required]],
    offertPrice: ['', [Validators.required]],
    category: ['', [Validators.required]],
    status: ['', [Validators.required]]  }) ;

  constructor( private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductosService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProducto( id ).subscribe( (data:Producto) => { 
      this.producto = data; 
      
      this.miFormulario.patchValue( {
        name: this.producto.name,
        cod: this.producto.cod,
        stock: this.producto.stock,
        price: this.producto.price,
        offertPrice: this.producto.offertPrice,
        category: '60a817dda92e181a700b5851',
        status: this.producto.status
      });
      
    });
    
    
  }

  update(){
    console.log('update');
    console.log(this.miFormulario.value);
    this.productService.putProducto( this.route.snapshot.paramMap.get('id'), this.miFormulario.value ).subscribe(
      data => {
        console.log(data );
        
      }
    )
 }

}
