import { ProfilePersonalComponent } from './profile-personal/profile-personal.component';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileFacilityComponent } from './profile-facility/profile-facility.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileFacilityComponent,
    ProfilePersonalComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
