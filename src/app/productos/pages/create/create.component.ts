import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name: ['Producto 1', [Validators.required, Validators.minLength(3)]],
    cod: ['12345', [Validators.required, Validators.minLength(5)]],
    stock: ['12', [Validators.required]],
    price: ['65565', [Validators.required]],
    offertPrice: ['900', [Validators.required]],
    category: ['60a817dda92e181a700b5851', [Validators.required]],
    status: [true, [Validators.required]]
  }) ;

  constructor( private fb: FormBuilder, 
    private productService: ProductosService) { 
      this.getCategories();
    }



  ngOnInit(): void {
  }

  crear() {
    console.log(this.miFormulario.value);
    this.productService.crear( this.miFormulario.value).subscribe( data => {
      console.log( data);
    });

  }

  getCategories() {
      console.log('Getcategories');
      this.productService.getCategories().subscribe( data => {
        console.log(data);
      });
  }

}
