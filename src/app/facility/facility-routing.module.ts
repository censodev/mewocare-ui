import { FacilityComponent } from './facility.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacilityDetailComponent } from './facility-detail/facility-detail.component';


const routes: Routes = [
  {
    path: 'facility',
    component: FacilityComponent,
    children: [
      {
        path: ':id',
        component: FacilityDetailComponent
      }
    ]
  },
  // {
  //   path: 'facility/:id',
  //   component: FacilityDetailComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
