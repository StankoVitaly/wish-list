import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ListRoutingModule} from './list-routing.module';
import {ListComponent} from './list.component';
import {MainListComponent} from './pages/main-list/main-list.component';
import {WishListComponent} from './pages/wish-list/wish-list.component';
import {ProductItemComponent} from './components/product-item/product-item.component';


@NgModule({
  declarations: [
    ProductItemComponent,
    ListComponent,
    MainListComponent,
    WishListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ListRoutingModule
  ]
})

export class ListModule {
}
