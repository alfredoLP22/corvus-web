import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ViewShipmentComponent } from './admin/view/view-shipment.component';
import { EditComponent } from './admin/edit/edit.component';

const childRoutes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'view/:id', component: ViewShipmentComponent},
  { path: 'edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }