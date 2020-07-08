import { Comment } from './../models/comment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  readonly SERVICE_POST = environment.SERVICE_POST;

  constructor(private http: HttpClient) { }

  public getCommentList(postId: string): Comment[] {
    let rs: Comment[];
    // let params: HttpParams;
    // params.append('postId', postId);
    // this.http.get(`${this.SERVICE_POST}/comment`, { params }).subscribe((res: Comment[]) => rs = res);
    new Observable<Comment[]>(obs => {
      const comments: Comment[] = [
        {
          text: 'yo bro, xin tí muối',
          username: '@1_xíu_cute',
          avatar: 'https://vnn-imgs-f.vgcloud.vn/2019/11/09/07/meo-black-golden-1.jpg'
        },
        {
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          username: '@mlem',
          avatar: 'https://vnn-imgs-f.vgcloud.vn/2019/11/09/07/meo-black-golden-1.jpg'
        },
        {
          text: ':))))',
          username: '@toto',
          avatar: 'https://vnn-imgs-f.vgcloud.vn/2019/11/09/07/meo-black-golden-1.jpg'
        }
      ]
      obs.next(comments);
    }).subscribe((res: Comment[]) => rs = res);
    return rs;
  }
}
