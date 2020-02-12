import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product-list.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  formData:Product;

  readonly rootUrl = 'http://localhost:50417/api'
  list: Product[];

  constructor(private http: HttpClient) { }

  postProduct(){
    return this.http.post(this.rootUrl + '/Products', this.formData);
  }

  putProduct(){
    return this.http.put(this.rootUrl + '/Products/' + this.formData.Id, this.formData);
  }

  deleteProduct(id){
    return this.http.delete(this.rootUrl + '/Products/' + id);
  }

  getProductList(){
    this.http.get(this.rootUrl + '/Products')
    .toPromise()
    .then(res => this.list = res as Product[]);
  }
}
