import { FacilityListComponent } from './facility-list/facility-list.component';
import { FacilityComponent } from './facility.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import { FacilityDetailComponent } from './facility-detail/facility-detail.component';


@NgModule({
  declarations: [
    FacilityComponent,
    FacilityListComponent,
    FacilityDetailComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule
  ]
})
export class FacilityModule { }
