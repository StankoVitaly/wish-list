import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainListComponent} from './pages/main-list/main-list.component';
import {WishListComponent} from './pages/wish-list/wish-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainListComponent
  },
  {
    path: 'wish-list',
    component: WishListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ListRoutingModule {
}
