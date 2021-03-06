import { NotificationBoxModule } from './../shared/notification-box/notification-box.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule,
  MatBadgeModule,
]

@NgModule({
  declarations: [HeaderComponent, FooterComponent,],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    RouterModule,
    NotificationBoxModule,
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class LayoutModule { }
