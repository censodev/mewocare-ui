import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { PostComponent } from './post/post.component';
import { CommentBoxComponent } from '../shared/comment-box/comment-box.component';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatInputModule,
  MatMenuModule
];

@NgModule({
  declarations: [HomeComponent, PostComponent, CommentBoxComponent],
  imports: [
  CommonModule,
    HomeRoutingModule,
    ...MATERIAL_MODULES
  ]
})
export class HomeModule { }
