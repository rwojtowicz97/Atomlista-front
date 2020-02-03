import { Injectable } from "@angular/core";
import { Worker } from "./worker-list.model";
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  formData: Worker;

  readonly rootUrl = 'http://localhost:50417/api';
  list: Worker[];

  constructor(private http: HttpClient) { }
  postWorker(){
    return this.http.post(this.rootUrl + '/people', this.formData);
  }

  putWorker(){
    return this.http.put(this.rootUrl + '/people/'+ this.formData.Id, this.formData);
  }

  deleteWorker(id){
    return this.http.delete(this.rootUrl + '/people/' + id);
  }

  getWorkerList(){
    this.http.get(this.rootUrl+'/people')
    .toPromise()
    .then(res => this.list = res as Worker[]);
  }
}
