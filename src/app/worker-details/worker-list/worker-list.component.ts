import { Component, OnInit } from '@angular/core';
import { WorkerService } from "src/app/shared/worker-list/worker-list.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: []
})
export class WorkerListComponent implements OnInit {

  constructor(private service:WorkerService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getWorkerList();
  }

  onDelete(Id){
    if(confirm('Are you sure to delete this worker?'))
    this.service.deleteWorker(Id)
    .subscribe(res =>{
      this.service.getWorkerList();
      this.toastr.warning('Deleted successfully', 'Worker list updated');
    },
      err=>{
        console.log(err)
      });
  }

}
