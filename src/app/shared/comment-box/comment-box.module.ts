import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommentBoxComponent } from './comment-box.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const MATERIAL_MODULES = [
  MatInputModule,
  MatButtonModule,
]

@NgModule({
  declarations: [CommentBoxComponent],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    RouterModule,
    FormsModule,
  ],
  exports: [CommentBoxComponent]
})
export class CommentBoxModule { }
