import { Component, OnInit } from '@angular/core';
import { WorkerService } from "src/app/shared/worker-list.service";
import { Worker } from "src/app/shared/worker-list.model";

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: []
})
export class WorkerListComponent implements OnInit {

  constructor(private service:WorkerService) { }

  ngOnInit() {
    this.service.getWorkerList();
  }

  populateForm(worker: Worker){
    this.service.formData = Object.assign({}, worker);
  }

}
