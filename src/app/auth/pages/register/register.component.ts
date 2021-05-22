import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email: ['test10@test.cl', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    name: ['Articos', [Validators.required, Validators.minLength(3)]],
  
  }) ;

  constructor( private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

    register() {
    
    const {name, email, password} = this.miFormulario.value;

    this.authService.register(name , email, password).subscribe( ok => {
      if ( ok == true ) {
        this.router.navigateByUrl('/productos');
      } else {
        swal.fire('Error', ok, 'error');
      }   
    });
  }

  ngOnInit(): void {
  }

}
