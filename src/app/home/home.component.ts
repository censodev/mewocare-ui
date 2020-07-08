import { Shop } from './../core/models/shop';
import { PostService } from './../core/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../core/models/post';
import { ShopService } from '../core/services/shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[];
  recommendedShops: Shop[];

  constructor(private postService: PostService, private shopService: ShopService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.recommendedShops = this.shopService.getRecommendedShops();
  }
}
