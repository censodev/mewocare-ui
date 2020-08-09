import { ChatBoxModule } from './shared/chat-box/chat-box.module';
import { ChatBoxContainerDirective } from './core/directives/chat-box-container.directive';
import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';

const MATERIAL_MODULES = [
  MatSidenavModule
]

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxContainerDirective
  ],
  imports: [
    ...MATERIAL_MODULES,
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    ChatBoxModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
