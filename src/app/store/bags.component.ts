import { Cart } from '../model/cart.model';
import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bags',
  templateUrl: 'bags.component.html',
  styleUrls: ['bags.component.css']
})
export class BagsComponent {
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository,
                private cart: Cart , private router: Router) {}

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts('bags')
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository
    .getProducts('bags').length / this.productsPerPage);
    }

    addProductToCart(product: Product) {
      this.cart.addLine(product);
      this.router.navigateByUrl("/cart");
      }

  }
