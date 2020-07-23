import { Observable, of } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  // Editor
  ckEditor = ClassicEditor;
  ckEditorConfig = {};
  ckData = '';

  // Tag
  selectedTags = [];
  tagsList: Observable<string[]> = of(['aaa', 'bbbb', 'cccccc']);
  tagsListSync: string[] = [];
  filterTagsList: Observable<string[]> = this.tagsList;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagSelectable = true;
  tagRemovable = true;
  tagFrmCtrl = new FormControl();

  constructor() {
    this.filterTagsList = this.tagsList;
    this.tagFrmCtrl.registerOnChange(search => {
      this.filterTagsList = search ? this.tagsList.pipe(filter(t => t.indexOf(search) >= 0)) : this.tagsList;
    })
    this.tagsList.subscribe(tags => this.tagsListSync = tags);
  }

  ngOnInit(): void {
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value.trim();

    input.value = '';

    if (this.selectedTags.includes(value) || !this.tagsListSync.includes(value))
      return;

    this.selectedTags.push(value);
  }

  removeTag(tag: string): void {
    const index = this.selectedTags.indexOf(tag);

    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    }
  }

  selectTag(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;
    this.tagInput.nativeElement.value = '';
    if (this.selectedTags.includes(value) || !this.tagsListSync.includes(value))
      return;
    this.selectedTags.push(value);
  }

}
