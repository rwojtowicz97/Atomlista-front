import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from "./homepage";
import { AtomListComponent } from './atom-list/atom-list.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { TeamListComponent } from "./team-list/index";
import { WorkerListComponent } from "./worker-list/worker-list.component";

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'atom-list', component: AtomListComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'team-list', component: TeamListComponent },
    { path: 'worker-list', component: WorkerListComponent },

    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);