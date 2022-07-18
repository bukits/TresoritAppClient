import { ProductCommentsViewComponent } from './components/product-comments-view/product-comments-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchGridComponent } from './components/search-grid/search-grid.component';

const routes: Routes = [
  {
    path: '',
    component: SearchGridComponent,
  },
  {
    path: 'product',
    component: ProductCommentsViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
