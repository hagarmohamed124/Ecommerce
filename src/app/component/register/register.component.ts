import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}



 msError:string= '';


registerForm:FormGroup = new FormGroup({
name: new FormControl(null, [Validators.required, Validators.minLength(3) ,Validators.maxLength(20)]),

email: new FormControl(null, [Validators.required, Validators.email]),
password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),

phone: new FormControl(null, [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])

  });


  handelForm(): void {
    if (this.registerForm.valid) {
      this._AuthService.setRegister(this.registerForm.value).subscribe({
        next: (response: any) => {
          if (response.message == 'success') {
            this._Router.navigate(['/login']);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.msError = err.error.massage;
        }
      });
    }
  }
}  