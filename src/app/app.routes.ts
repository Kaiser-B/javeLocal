import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page';
import { ShopComponent } from './pages/shop/shop';
import { ProductComponent } from './pages/product/product';

export const routes: Routes = [
  {
    path:'',
    component:HomePageComponent,
  },

  {
    path: 'shop',
    component: ShopComponent
  },

  { path: 'product',
    component: ProductComponent
  },

  {
    path:'**',
    redirectTo:''
  },
];
