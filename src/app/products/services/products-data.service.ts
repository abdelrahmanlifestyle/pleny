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


  loadAllProducts(
    sort = 'title',
    search = '',
    skip = 0,
  ) {
    return this.http.get<ProductsPage>(`${this.apiUrl}/search?q=${search}&limit=30&skip=${skip}&sortBy=${sort}&order=asc`)
  }

  loadCategories() {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`)

  }

  loadProductsByCategory(
    categoryId: string,
    sort = 'title',
    search = '',
    skip = 0,
  ) {
    return this.http.get<ProductsPage>(`${this.apiUrl}/category/${categoryId}?search?q=${search}&limit=30&skip=${skip}&sortBy=${sort}&order=asc`)
  }

}
