import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const POSTS: Post[] = [
  {
    id: '12345678',
    username: '@mei',
    action: 'đã làm cái gì đó',
    tags: ['#abc', '#xyz'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    attachments: [
      {
        url: 'https://abc.com.vn/aaa.jpg',
        type: 'image'
      }
    ],
    likes: 5,
    clipped: 6,
    comments: 3,
    time: new Date('Sat Jun 20 2020 18:03:03 GMT+0700'),
    isLiked: true,
    isClipped: false
  },
  {
    id: '12345679',
    username: '@hakase',
    action: 'đã làm cái gì đó',
    tags: ['#abc', '#xyz'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    attachments: [
      {
        url: 'https://abc.com.vn/aaa.jpg',
        type: 'image'
      }
    ],
    likes: 1,
    clipped: 3,
    comments: 3,
    time: new Date('Sat Jun 20 2020 18:03:03 GMT+0700'),
    isLiked: false,
    isClipped: false
  },
  {
    id: '12345670',
    username: '@mono',
    action: 'đã làm cái gì đó',
    tags: ['#abc', '#xyz'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    attachments: [
      {
        url: 'https://abc.com.vn/aaa.jpg',
        type: 'image'
      }
    ],
   likes: 0,
    clipped: 2,
    comments: 3,
    time: new Date('Sat Jun 20 2020 18:03:03 GMT+0700'),
    isLiked: false,
    isClipped: true
  }
];

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  public getPosts(): Observable<Post[]> {
    return of(POSTS).pipe(delay(1000));
  }

  public updatePost(post: Post): void {
    for (let p of POSTS) {
      if (p.id === post.id) {
        p = post;
        break;
      }
    }
  }
}
