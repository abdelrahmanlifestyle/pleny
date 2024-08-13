import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category, Product} from "../../shared/interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  private apiUrl = 'https://dummyjson.com/products';


  constructor(private http: HttpClient) {
  }


  loadAllProducts() {
    return this.http.get<Product[]>(this.apiUrl)
  }

  loadCategories() {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`)

  }

  loadProductsByCategory(categoryId: string) {
    return this.http.get<Product[]>(`${this.apiUrl}/category/${categoryId}`)
  }

}
