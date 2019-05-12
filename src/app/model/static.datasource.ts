import { Observable, from } from 'rxjs';

import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Product } from './product.model';

@Injectable()

export class StaticDataSource {
    private products: Product[] = [
        new Product(1, 'Product 1', 'bags', 'Product 1 (bags)', 100, 'assets/bags/1.jpg'),
        new Product(2, 'Product 2', 'bags', 'Product 2 (bags)', 100, 'assets/bags/2.jpg'),
        new Product(3, 'Product 3', 'bags', 'Product 3 (bags)', 100, 'assets/bags/3.jpg'),
        new Product(4, "Product 4", "bags", "Product 4 (bags)", 100, 'assets/bags/4.jpg'),
        new Product(5, "Product 5", "bags", "Product 5 (bags)", 100, 'assets/bags/5.jpg'),
        new Product(6, "Product 6", "belts", "Product 6 (belts)", 100, 'assets/bags/6.jpg'),
        new Product(7, "Product 7", "belts", "Product 7 (belts)", 100, 'assets/bags/7.jpg'),
        new Product(8, "Product 8", "belts", "Product 8 (belts)", 100, 'assets/bags/8.jpg'),
        new Product(9, "Product 9", "belts", "Product 9 (belts)", 100, 'assets/bags/9.jpg'),
        new Product(10, "Product 10", "Category 2", "Product 10 (Category 2)", 100),
        new Product(11, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
        new Product(12, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
        new Product(13, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
        new Product(14, "Product 14", "Category 3", "Product 14 (Category 3)", 100),
        new Product(15, "Product 15", "Category 3", "Product 15 (Category 3)", 100),
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
        }

    saveOrder(order: Order): Observable<Order> {
      console.log(JSON.stringify(order));
      return from([order]);
          }
}
