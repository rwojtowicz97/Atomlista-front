import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/shared/team-list/team-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: []
})
export class TeamListComponent implements OnInit {

  constructor(private service:TeamService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getTeamList();
  }

  onDelete(Id) {
    if(confirm('Are you sure to delete this team?'))
    this.service.deleteTeam(Id)
    .subscribe(res =>{
      this.service.getTeamList();
      this.toastr.warning('Deleted successfully', 'Team list updated');
    },
    err =>{
      console.log(err);
    })
  }

}
