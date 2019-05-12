import { RouterModule, Routes } from '@angular/router';

import { BagsComponent } from './store/bags.component';
import { BeltsComponent } from './store/belts.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { CompanyInfoComponent } from './store/companyInfo.component';
import { NgModule } from '@angular/core';
import { StoreFirstGuard } from './storeFirst.guard';
import { StoreNavComponent } from './store/storeNav.component';
import { WalletsComponent } from './store/wallets.component';
import { WatchStrapsComponent } from './store/watchStraps.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'info', component: CompanyInfoComponent,
    canActivate: [StoreFirstGuard] },
    { path: 'bags', component: BagsComponent,
    canActivate: [StoreFirstGuard]},
    { path: 'belts', component: BeltsComponent,
    canActivate: [StoreFirstGuard]},
    { path: 'wstraps', component: WatchStrapsComponent,
    canActivate: [StoreFirstGuard]},
    { path: 'wallets', component: WalletsComponent,
    canActivate: [StoreFirstGuard]},
    { path: 'cart', component: CartDetailComponent,
    canActivate: [StoreFirstGuard]},
    { path: 'checkout', component: CheckoutComponent,
    canActivate: [StoreFirstGuard]},
    { path: 'admin',
      loadChildren: './admin/admin.module#AdminModule',
      canActivate: [StoreFirstGuard]
      },
    { path: '**', redirectTo: '/info' }])],
        exports: [RouterModule]
})
export class AppRoutingModule { }
