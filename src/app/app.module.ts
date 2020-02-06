import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule}  from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { appRoutingModule } from "./app.routing";
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from "./homepage/homepage.component";
import { AtomListComponent } from './atom-list/atom-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TeamListComponent } from './team-details/team-list/team-list.component';
import { WorkerListComponent } from './worker-details/worker-list/worker-list.component';
import { WorkerCreateComponent } from './worker-details/worker-create/worker-create.component';
import { WorkerService } from './shared/worker-list/worker-list.service';
import { TeamCreateComponent } from './team-details/team-create/team-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AtomListComponent,
    ProductListComponent,
    TeamListComponent,
    WorkerListComponent,
    WorkerCreateComponent,
    TeamCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    appRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    ToastrModule.forRoot()
  ],
  providers: [WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
