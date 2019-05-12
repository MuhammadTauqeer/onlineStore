import { BagsComponent } from './bags.component';
import { BeltsComponent } from './belts.component';
import { BrowserModule } from '@angular/platform-browser';
import { CartDetailComponent } from './cartDetail.component';
import { CartSummaryComponent } from './cartSummary.component';
import { CheckoutComponent } from './checkout.component';
import { CompanyInfoComponent } from './companyInfo.component';
import { CounterDirective } from './counter.directive';
import { FooterComponent } from './footer.component';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreNavComponent } from './storeNav.component';
import { WalletsComponent } from './wallets.component';
import { WatchStrapsComponent } from './watchStraps.component';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  declarations : [StoreNavComponent, BagsComponent, BeltsComponent, WatchStrapsComponent,
    WalletsComponent, CompanyInfoComponent, FooterComponent, CounterDirective, CartSummaryComponent,
    CartDetailComponent, CheckoutComponent],
  exports : [StoreNavComponent, CartDetailComponent, CheckoutComponent]
})

export class StoreModule {}
