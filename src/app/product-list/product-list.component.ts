import { Component, OnInit } from '@angular/core';
import { products } from "./../products"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products = products
  ngOnInit(): void {
  }
  
  view (){
    alert('shared')
  }

  stringify(str: string): string{
    return str.replace(/ /g, '-')
  }
}
