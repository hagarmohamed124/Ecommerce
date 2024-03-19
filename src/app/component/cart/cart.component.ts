import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor(private _CartService:CartService){}

cartDetails:any = {};

ngOnInit():void {

this._CartService.getUserCart().subscribe(
  {
    next:(response)=>{
      console.log(response.data);
      this.cartDetails = response.data;



    },
    error:(err)=>{
console.log(err);

    }
  }
)

}



removeItem(id:string):void{

  this._CartService.RemoveCart(id).subscribe({
    next:(response)=>{
      this.cartDetails = response.data;
    },
    error:(err)=> {
      console.log(err);
      
    }
  })

}


changeCount(id:string , newCount:number):void{

if (newCount > 0) {
  this._CartService.updateCartProduct(id,newCount).subscribe({
    next:(response)=>{
      this.cartDetails = response.data;

    },
    error:(err)=>{
      console.log(err);
    }
  })

}




}



}
