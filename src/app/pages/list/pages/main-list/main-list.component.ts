import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../models/product';
import {ProductService} from '../../../../services/product.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {

  products: Product[] = [];
  product: Product;
  showRemoveIcon: boolean;
  show: boolean;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.show = true;
    this.showRemoveIcon = false;
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(data => {
        this.products = data;
      });
  }

  onAddToWishList(product) {
    this.productService.postProduct(product)
      .subscribe(data => {
        console.log(data);
        this.product = data;
      });
  }

  // deleteFromWishList(product) {
  //   this.productService.deleteProduct(product.id)
  //     .subscribe(data => {
  //       this.getProducts();
  //     });
  // }

}
