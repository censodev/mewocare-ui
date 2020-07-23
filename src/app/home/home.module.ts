import { MatChipsModule } from '@angular/material/chips';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CommentBoxModule } from './../shared/comment-box/comment-box.module';
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
import { RecommendedShopComponent } from './recommended-shop/recommended-shop.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { PostEditorModule } from '../shared/post-editor/post-editor.module';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatInputModule,
  MatMenuModule,
  MatGridListModule,
  MatSidenavModule,
  MatDialogModule,
  MatChipsModule,
];

@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    RecommendedShopComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    HomeRoutingModule,
    CommentBoxModule,
    PostEditorModule
  ]
})
export class HomeModule { }
