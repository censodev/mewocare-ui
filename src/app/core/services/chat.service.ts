import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  onChatBoxOpened = new EventEmitter<unknown>();
  onChatBoxClosed = new EventEmitter<unknown>();
}
