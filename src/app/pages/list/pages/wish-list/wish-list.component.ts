import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../../models/product';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  products: Product[] = [];
  show: boolean;
  showRemoveIcon: boolean;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.show = false;
    this.showRemoveIcon = true;
    this.getWishes();
  }

  getWishes() {
    this.productService.getWishes()
      .subscribe(data => {
        this.products = data;
      });
  }

  onRemoveFromWishList(product) {
    this.productService.deleteProduct(product.id)
      .subscribe(data => {
        this.getWishes();
      });
  }

}
