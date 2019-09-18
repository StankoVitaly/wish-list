import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product;
  @Output() addToWishList = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  add(product) {
    this.addToWishList.emit(product);
  }

}
