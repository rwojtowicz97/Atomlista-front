import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from "./homepage";
import { AtomListComponent } from './atom-details/atom-list/atom-list.component';
import { ProductListComponent } from "./product-details/product-list/product-list.component";
import { ProductCreateComponent } from "./product-details/product-create/product-create.component"
import { TeamListComponent } from "./team-details/team-list/index";
import { TeamCreateComponent } from "./team-details/team-create/team-create.component";
import { WorkerListComponent } from "./worker-details/worker-list/worker-list.component";
import { WorkerCreateComponent } from "./worker-details/worker-create/worker-create.component";
const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'atom-list', component: AtomListComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-create', component: ProductCreateComponent },
    { path: 'team-list', component: TeamListComponent },
    { path: 'team-create', component: TeamCreateComponent },
    { path: 'worker-list', component: WorkerListComponent },
    { path: 'worker-create', component: WorkerCreateComponent },

    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
