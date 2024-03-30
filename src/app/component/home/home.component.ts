import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/shared/interfaces/product';
import { EcomdatapService } from 'src/app/shared/services/ecomdatap.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
constructor(private _EcomdatapService:EcomdatapService , private _CartService:CartService , private _ToastrService:ToastrService , private _Router:Router){}


products:products[] = [];
categories:any[] = [];
searchTerm:string = '';

addCart(id:string):void {
this._CartService.addcart(id).subscribe(
  {
    next:(response) => {
      console.log(response);

      this._ToastrService.success("It has been successfully added. 🛺")
      
    },
    error:(err)=>{
      console.log(err);

    
      // const toastr = this._ToastrService.warning("Sign In/Register!" );
      // toastr.onTap.subscribe(() => {
      
      // this._Router.navigate(['/login']);
      // });
    }

  }
)


}




customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  autoplay:true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: true
};


mainSlider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  autoplay:true,
  navSpeed: 700,
  navText: ['', ''],
 items:1,
  nav: true,
};

















ngOnInit(): void {
//get All products
  this._EcomdatapService.getAllProducts().subscribe({
next:(response)=> {
  this.products = response.data

  
},


  });
//get All categories

this._EcomdatapService.getCategories().subscribe({

  next:(respone)=>{
   this.categories = respone.data;
    
  }
})



}





}
