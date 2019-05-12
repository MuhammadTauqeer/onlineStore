import { Cart } from '../model/cart.model';
import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storenav',
  templateUrl: 'storeNav.component.html',
  styleUrls: ['storeNav.component.css']
})
export class StoreNavComponent {


  constructor(private repository: ProductRepository,
                private cart: Cart, private router: Router) { }


  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }

  /*
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

    get products(): Product[] {
      let pageIndex = (this.selectedPage - 1) * this.productsPerPage
      return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
      return this.repository.getCategories();
  }

  changeCategory(newCategory?: string){
      this.selectedCategory = newCategory;
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
          .getProducts(this.selectedCategory).length / this.productsPerPage)
      }
      */
}
