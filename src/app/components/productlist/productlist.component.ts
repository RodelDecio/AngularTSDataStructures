import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent {
  productList: string[] = ['Laptop', 'Smartphone', 'Headphones', 'Smartwatch'];
  product: string = '';

  addProduct(): void {
    if (this.product.trim()) {
      this.productList.push(this.product.trim());
      this.product = '';
    }
  }

  removeProduct(index: number): void {
    this.productList.splice(index, 1);
  }
}
