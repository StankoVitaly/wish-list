import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./pages/list/list.module`).then(m => m.ListModule)
  },
  {
    path: 'list',
    loadChildren: () => import(`./pages/list/list.module`).then(m => m.ListModule)
  },
  // {
  //   path: 'wish-list',
  //   loadChildren: () => import(`./pages/wish-list/wish-list.module`).then( m => m.WishListModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
