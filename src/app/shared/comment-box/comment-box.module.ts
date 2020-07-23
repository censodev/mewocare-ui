import { ProfileRoutingModule } from './../../profile/profile-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommentBoxComponent } from './comment-box.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const MATERIAL_MODULES = [
  MatInputModule,
  MatButtonModule,
]

@NgModule({
  declarations: [CommentBoxComponent],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    ProfileRoutingModule,
    FormsModule,
  ],
  exports: [CommentBoxComponent]
})
export class CommentBoxModule { }
