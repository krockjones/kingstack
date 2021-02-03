import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MeetTheFarmComponent} from '../../../meet-the-farm/meet-the-farm.component';
import {LineageViewerComponent} from '../../../lineage-viewer/lineage-viewer.component';
import {SandboxRedirectComponent} from '../../components/sandbox-redirect/sandbox-redirect.component';
import {PhotoGalleryComponent} from '../../../photo-gallery/photo-gallery.component';
import {AccountManagementComponent} from '../../../account-management/account-management.component';
import {StoreWindowComponent} from '../../../store-window/store-window.component';

const routes: Routes = [
  { path: 'the-farm', component: MeetTheFarmComponent },
  { path: 'lineage-viewer', component: LineageViewerComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent},
  { path: 'account', component: AccountManagementComponent},
  { path: 'store', component: StoreWindowComponent},
  { path: '',   redirectTo: 'the-farm', pathMatch: 'full' }, // redirect to
  { path: '**', component: SandboxRedirectComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
