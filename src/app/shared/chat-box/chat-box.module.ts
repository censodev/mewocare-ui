import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box.component';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
];

@NgModule({
  declarations: [ChatBoxComponent],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    FormsModule
  ],
  exports: [ChatBoxComponent]
})
export class ChatBoxModule { }
