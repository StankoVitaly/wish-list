import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../models/product';
import {ProductService} from '../../../../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product;
  @Input() show: boolean;
  @Input() showRemoveIcon: boolean;
  @Output() addToWishList = new EventEmitter<Product>();
  @Output() removeFromWishList = new EventEmitter<Product>();

  constructor(private productService: ProductService) {
  }

  ngOnInit() {

  }

  add(product) {
    this.addToWishList.emit(product)
    this.changeStatus(this.product);
  }

  changeStatus(product) {
    this.productService.changeIcon(product.id, {status: product.status = !product.status})
      .subscribe(data => {
        console.log(data);
      });
  }

  delete(product) {
    this.removeFromWishList.emit(product);
  }

}
