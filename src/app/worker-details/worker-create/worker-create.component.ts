import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WorkerService } from 'src/app/shared/worker-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-worker-create',
  templateUrl: './worker-create.component.html',
  styleUrls: ['./worker-create.component.css']
})
export class WorkerCreateComponent implements OnInit {

  constructor(private service:WorkerService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      Id: 0,
      Username: '',
      Name: '',
      Surname: '',
      Email: ''
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.Id==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postWorker().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Worker added');
      },
      err => {
        console.log(err);
      }
    )
  }
  updateRecord(form:NgForm){
    this.service.putWorker().subscribe(
      res=> {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Worker added');
      },
      err => {
        console.log(err);
      }
    )
  }
}
