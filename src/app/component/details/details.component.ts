import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { products } from 'src/app/shared/interfaces/product';
import { EcomdatapService } from 'src/app/shared/services/ecomdatap.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
constructor( private _ActivatedRoute:ActivatedRoute , private _EcomdatapService :EcomdatapService  , private _CartService:CartService){}

productDetails:products = {} as products;

productSlider: OwlOptions = {
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



addCart(id:string):void {
  this._CartService.addcart(id).subscribe(
    {
      next:(response) => {
        console.log(response);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
  
    }
  )
  
  }
  










ngOnInit():void {

  this._ActivatedRoute.paramMap.subscribe({
next:(params)=>{
 let idProduct:any =params.get('id')

 this._EcomdatapService.getProdutsDetails(idProduct).subscribe({
  next:(response)=>{
    console.log(response.data);
    
    this.productDetails = response.data;
  }
 })

 
}

  })

}

} {



}
