import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email: ['Test2@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor( private fb: FormBuilder,
    private router: Router,
    private authService: AuthService ) { }



login(){
    
  const {email, password} = this.miFormulario.value;

  this.authService.login(email, password).subscribe( ok => {
    
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
