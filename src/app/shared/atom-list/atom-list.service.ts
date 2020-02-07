import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Atom } from "./atom-list.model"

@Injectable({
  providedIn: 'root'
})
export class AtomService{
  formData:Atom;

  readonly rootUrl = 'http://localhost:50417/api';
  list: Atom[];

  constructor(private http:HttpClient) { }
  postAtom(){
    return this.http.post(this.rootUrl + 'Atoms', this.formData);
  }

  putAtom(){
    return this.http.put(this.rootUrl + '/Atoms/'+ this.formData.Id, this.formData);
  }

  deleteAtom(id){
    return this.http.delete(this.rootUrl + '/Atoms/'+id);
  }

  getAtomList(){
    this.http.get(this.rootUrl+'/Atoms')
    .toPromise()
    .then(res => this.list = res as Atom[]);
  }
}
