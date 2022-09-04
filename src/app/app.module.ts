import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {AppRoutingModule} from "./app-routing.module"
import { HttpClientModule} from "@angular/common/http"

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CartComponent,
    ShippingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
