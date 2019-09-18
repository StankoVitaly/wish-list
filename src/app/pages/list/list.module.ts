import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListRoutingModule} from './list-routing.module';
import {ListComponent} from './list.component';
import {ProductItemComponent} from '../../components/product-item/product-item.component';


@NgModule({
  declarations: [
    ListComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule {
}
