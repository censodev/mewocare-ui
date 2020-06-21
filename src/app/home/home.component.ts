import { PostService } from './../core/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../core/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(p => this.posts = p);
  }
}
