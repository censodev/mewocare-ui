import { ChatService } from './../../core/services/chat.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit  {
  @Input() contactId: string;
  @ViewChild('chatRecordContainer') chatRecordContainer: ElementRef;
  messageToSend: string;

  constructor(private chatService: ChatService) { }
  ngOnDestroy(): void {
  }
  ngAfterViewInit(): void {
    this.chatRecordContainer.nativeElement.scrollTop = this.chatRecordContainer.nativeElement.scrollHeight;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  close(): void {
    this.chatService.onChatBoxClosed.emit();
  }

  sendMessage(): void {
    console.log(this.messageToSend);
    this.messageToSend = '';
  }
}
