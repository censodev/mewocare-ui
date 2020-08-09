import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box.component';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
];

@NgModule({
  declarations: [ChatBoxComponent],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
  ],
  exports: [ChatBoxComponent]
})
export class ChatBoxModule { }
