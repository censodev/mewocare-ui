import { PostEditorComponent } from './../../shared/post-editor/post-editor.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @ViewChild(PostEditorComponent) postEditor: PostEditorComponent;
  tagsList: string[] = ['aaa', 'bbbb', 'ccc', 'ccccc ccc','aaa', 'bbbb', 'ccccc ccc','aaa', 'bbbb', 'ccccc ccc','aaa', 'bbbb', 'ccccc ccc','aaa', 'bbbb', 'ccccc ccc']

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPostEditor() {
    this.dialog.open(PostEditorComponent);
  }

}
