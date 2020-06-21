import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  public getPosts(): Observable<Post[]> {
    return new Observable(sub => {
      sub.next([
        {
          id: '12345678',
          username: 'abc',
          action: 'đã làm cái gì đó',
          tags: ['#abc', '#xyz'],
          text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          attachments: [
            {
              url: 'https://abc.com.vn/aaa.jpg',
              type: 'image'
            }
          ],
          comments: [
            {
              username: 'ddd',
              profileUrl: 'https://abc.com.vn/1120',
              text: 'cutie'
            }
          ],
          votes: {
            up: 11,
            down: 1
          },
          clipped: 6,
          time: new Date('Sat Jun 20 2020 18:03:03 GMT+0700')
        },
        {
          id: '12345679',
          username: 'kkk',
          action: 'đã làm cái gì đó',
          tags: ['#abc', '#xyz'],
          text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          attachments: [
            {
              url: 'https://abc.com.vn/aaa.jpg',
              type: 'image'
            }
          ],
          comments: [
            {
              username: 'ddd',
              profileUrl: 'https://abc.com.vn/1120',
              text: 'cutie'
            }
          ],
          votes: {
            up: 11,
            down: 1
          },
          clipped: 3,
          time: new Date('Sat Jun 20 2020 18:03:03 GMT+0700')
        },
        {
          id: '12345670',
          username: 'ooo',
          action: 'đã làm cái gì đó',
          tags: ['#abc', '#xyz'],
          text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          attachments: [
            {
              url: 'https://abc.com.vn/aaa.jpg',
              type: 'image'
            }
          ],
          comments: [
            {
              username: 'ddd',
              profileUrl: 'https://abc.com.vn/1120',
              text: 'cutie'
            }
          ],
          votes: {
            up: 11,
            down: 1
          },
          clipped: 2,
          time: new Date('Sat Jun 20 2020 18:03:03 GMT+0700')
        }
      ])
    })
  }
}
