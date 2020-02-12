import { Component, OnInit } from '@angular/core';
import { AtomService } from "src/app/shared/atom-list/atom-list.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-atom-list',
  templateUrl: './atom-list.component.html',
  styleUrls: []
})
export class AtomListComponent implements OnInit {

  constructor(private service:AtomService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getAtomList();
  }

  onDelete(Id){
    if(confirm('Are you sure to delete this atom?'))
    this.service.deleteAtom(Id)
    .subscribe(res =>{
      this.service.getAtomList();
      this.toastr.warning('Deleted successfully', 'Atom list updated');
    },
      err=>{
        console.log(err)
      });
  }

}
