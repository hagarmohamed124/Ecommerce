import { Component } from '@angular/core';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}



  msError:string= '';
 
 
 loginForm:FormGroup = new FormGroup({

 email: new FormControl(null, [Validators.required, Validators.email]),
 password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
   
});
 

// loginForm:FormGroup = this._FormBuilder.group({

//   email:[null, [Validators.required, Validators.email]],
//   password:[null, [ Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/),]]
    
//   })



 
   handelForm(): void {
     if (this.loginForm.valid) {
       this._AuthService.setLogin(this.loginForm.value).subscribe({
         next: (response: any) => {
           if (response.message == 'success') {
            localStorage.setItem('eToken' , response.token)
            this._AuthService.saveUserData();
             this._Router.navigate(['/home']);
           }
         },
         error: (err: HttpErrorResponse) => {
           this.msError = err.error.massage;
         }
       });
     }
     else {
      this.loginForm.markAllAsTouched()
     }
   }
 }  

