import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';

const MATERIAL_MODULES = [
  MatSidenavModule
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...MATERIAL_MODULES,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    AuthModule,
    ProfileModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
