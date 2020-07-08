import { CommentService } from '../../core/services/comment.service';
import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../core/models/comment';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  @Input() data: Comment[];
  @Input() postId: string;

  commentList: Comment[];
  commentText: string;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    if (!this.data) {
      this.commentList = this.commentService.getCommentList(this.postId);
    } else {
      this.commentList = this.data;
    }    
  }

  submitComment(): void {
    console.log(this.commentText);
    this.commentText = '';
  }
}
