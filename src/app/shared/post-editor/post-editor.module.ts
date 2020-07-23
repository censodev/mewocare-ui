import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditorComponent } from './post-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

const MATERIAL_MODULES = [
  MatDialogModule,
  MatButtonModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatFormFieldModule,
]

@NgModule({
  declarations: [PostEditorComponent],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [PostEditorComponent]
})
export class PostEditorModule { }
