import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Team } from './team-list.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  formData:Team;

  readonly rootUrl = 'http://localhost:50417/api';
  list: Team[];

  constructor(private http: HttpClient) { }

  postTeam(){
    return this.http.post(this.rootUrl + '/Teams', this.formData);
  }

  putTeam(){
    return this.http.put(this.rootUrl+ '/Teams/'+ this.formData.Id, this.formData);
  }

  deleteTeam(id){
    return this.http.delete(this.rootUrl +'/Teams/'+id);
  }

  getTeamList(){
    this.http.get(this.rootUrl+'/Teams')
    .toPromise()
    .then(res => this.list = res as Team[]);
  }
}
