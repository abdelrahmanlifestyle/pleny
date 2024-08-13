import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category, ProductsPage} from "../../shared/interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  private apiUrl = 'https://dummyjson.com/products';


  constructor(private http: HttpClient) {
  }


  loadAllProducts() {
    // this.http.get('https://dummyjson.com/products/search?q=phone&sort=price&category=smartphones').subscribe(console.log)
    return this.http.get<ProductsPage>(this.apiUrl)
  }

  loadCategories() {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`)

  }

  loadProductsByCategory(categoryId: string) {
    return this.http.get<ProductsPage>(`${this.apiUrl}/category/${categoryId}`)
  }

}
