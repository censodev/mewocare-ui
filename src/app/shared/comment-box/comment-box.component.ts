import { CommentService } from '../../core/services/comment.service';
import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../core/models/comment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  @Input() postId: string;

  commentList: Observable<Comment[]>;
  commentText: string;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentList = this.commentService.getCommentList(this.postId);
  }

  submitComment(): void {
    console.log(this.commentText);
    this.commentText = '';
  }
}
