import { PostService } from './../../core/services/post.service';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  isCommentHidden: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  computeTime(dateTime: Date) {
    let fmt = (num: number) => {
      return num > 9 ? num : '0' + num;
    }
    let time = `${fmt(dateTime.getHours())}:${fmt(dateTime.getMinutes())}`;
    let date = `${fmt(dateTime.getDate())}/${fmt(dateTime.getMonth() + 1)}/${dateTime.getFullYear()}`;
    return { time, date }
  }

  upVote() {
    if (!this.post.isUpVote) {
      this.post.votes.up++;
      this.post.isUpVote = !this.post.isUpVote;
    }

    if (this.post.isDownVote) {
      this.post.votes.down--;
      this.post.isDownVote = !this.post.isDownVote;
    }
    this.updatePost(this.post);
  }

  downVote() {
    if (!this.post.isDownVote) {
      this.post.votes.down++;
      this.post.isDownVote = !this.post.isDownVote;
    }

    if (this.post.isUpVote) {
      this.post.votes.up--;
      this.post.isUpVote = !this.post.isUpVote;
    }
    this.updatePost(this.post);
  }

  clipPost() {
    if (this.post.isClipped) {
      this.post.clipped--;
    } else {
      this.post.clipped++;
    }
    this.post.isClipped = !this.post.isClipped;
    this.updatePost(this.post);
  }

  updatePost(post: Post): void {
    this.postService.updatePost(post);
  }

}
