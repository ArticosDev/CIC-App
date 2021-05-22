import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name: ['Articos', [Validators.required, Validators.minLength(3)]],
    cod: ['12345', [Validators.required, Validators.minLength(5)]],
    stock: ['12', [Validators.required]],
    precio: ['12454', [Validators.required]],
    oferta: ['12454', [Validators.required]],
    categoria: ['Arroz', [Validators.required]],
    estado: [true, [Validators.required]]
  }) ;

  constructor( private fb: FormBuilder) { }



  ngOnInit(): void {
  }

  crear() {
    console.log(this.miFormulario);
  }

}
