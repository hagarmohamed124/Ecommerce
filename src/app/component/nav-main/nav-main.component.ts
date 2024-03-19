import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})
export class NavMainComponent {

  constructor( private _AuthService:AuthService){}

  logOutUser():void{
  this._AuthService.logOut();
  
    }
  
    
  }
  

