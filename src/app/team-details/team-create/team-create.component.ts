import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeamService } from 'src/app/shared/team-list/team-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: []
})
export class TeamCreateComponent implements OnInit {

  constructor(private service:TeamService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      Id: 0,
      TeamName: ''
    }
  }

  onSubmit(form:NgForm){
    this.insertRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postTeam().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Team added');
        this.service.getTeamList();
      },
      err=>{
        console.log(err);
      }
    )
  }

}
