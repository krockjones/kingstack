import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MeetTheFarmComponent} from '../../../meet-the-farm/meet-the-farm.component';
import {LineageViewerComponent} from '../../../lineage-viewer/lineage-viewer.component';

const routes: Routes = [
  { path: 'the-farm', component: MeetTheFarmComponent },
  { path: 'lineage-viewer', component: LineageViewerComponent },
  { path: '',   redirectTo: 'the-farm', pathMatch: 'full' }, // redirect to
  { path: '**', component: MeetTheFarmComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
