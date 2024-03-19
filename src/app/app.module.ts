import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { RegisterComponent } from './component/register/register.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { LoginComponent } from './component/login/login.component';
import { NavAuthComponent } from './component/nav-auth/nav-auth.component';
import { NavMainComponent } from './component/nav-main/nav-main.component';
import { AuthLayoutComponent } from './component/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import {HttpClientModule} from '@angular/common/http';
import { BrandsComponent } from './component/brands/brands.component';
import { DetailsComponent } from './component/details/details.component';
import {BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BuyPipe } from './buy.pipe';
import { TermtextPipe } from './termtext.pipe';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './component/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    CategoriesComponent,
    RegisterComponent,
    NotfoundComponent,
    WishlistComponent,
    LoginComponent,
    NavAuthComponent,
    NavMainComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    BrandsComponent,
    DetailsComponent,
    BuyPipe,
    TermtextPipe,
    SearchPipe,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
