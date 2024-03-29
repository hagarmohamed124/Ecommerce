import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { BrandsComponent } from './component/brands/brands.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthLayoutComponent } from './component/auth-layout/auth-layout.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { authGuard } from './shared/guards/auth.guard';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { DetailsComponent } from './component/details/details.component';
import { CheckoutComponent } from './component/checkout/checkout.component';

const routes: Routes = [
 
    {
      path: '',
// canActivate:[authGuard],

      component: MainLayoutComponent,
      children: [
        { path: '', redirectTo:'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'cart',  canActivate:[authGuard], component: CartComponent },
        { path: 'products', component: ProductsComponent },
        { path: 'wish-list', component: WishlistComponent },
        {path:'details/:id' , component:DetailsComponent },
        { path: 'brands', component: BrandsComponent },
        {path:'checkout/:id' , component:CheckoutComponent},
        {path:'categories', component:CategoriesComponent},
        // { path: 'login', component: LoginComponent }
       
      ]
    },

    {
    path: '',
    component: AuthLayoutComponent,

    children: [
      { path: '', redirectTo:'register', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },

    {path:'**' , component:NotfoundComponent}
  ];
  







@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { 


}
