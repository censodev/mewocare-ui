import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

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

  upVote(id: string) {
    this.post.votes.up++;
  }

  downVote(id: string) {
    this.post.votes.down++;
  }

  clipPost(id: string) {

  }

}
