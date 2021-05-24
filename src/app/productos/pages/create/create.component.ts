import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  get categories(){
    return this.productService.categories;
  }

  menu: boolean = true;

  miFormulario: FormGroup = this.fb.group({
    name: ['Producto 1', [Validators.required, Validators.minLength(3)]],
    cod: ['12345', [Validators.required, Validators.minLength(5)]],
    stock: ['12', [Validators.required]],
    price: ['6500', [Validators.required]],
    offertPrice: ['1500', [Validators.required]],
    category: ['60a817dda92e181a700b5851', [Validators.required]],
    status: [false, [Validators.required]]
  }) ;

  miFormulario2: FormGroup = this.fb.group({
    name: ['Categoria 1', [Validators.required, Validators.minLength(3)]]
  }) ;

  constructor( private fb: FormBuilder, 
    private productService: ProductosService) { 

    }



  ngOnInit(): void {
    this.productService.getCategories().subscribe();
  }

  crear() {
    console.log(this.miFormulario.value);
    this.productService.crear( this.miFormulario.value).subscribe( ok => {

      if ( ok == true ) {
        swal.fire('Succes', 'Producto creado.', 'success');
      } else {      
        swal.fire('Error', ok, 'error');       
      }
    });

  }

  crearCat() {
    console.log(this.miFormulario2.value);
    this.productService.crearCat( this.miFormulario2.value).subscribe( ok => {

      if ( ok == true ) {
        swal.fire('Succes', 'Categoria creada.', 'success');
      } else {      
        swal.fire('Error', ok, 'error');       
      }
      this.productService.getCategories().subscribe();
    });

  }


}
