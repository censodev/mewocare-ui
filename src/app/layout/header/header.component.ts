import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  notifications = [
    {
      username: 'aaaa',
      content: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      time: Date.now()
    },
    {
      username: 'aaaa',
      content: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      time: 1595612638119
    },
    {
      username: 'aaaa',
      content: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      time: 1595605236896
    },
    {
      username: 'aaaa',
      content: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      time: 1563991803000
    }
  ];

  chats = this.notifications;

  constructor() { }

  ngOnInit(): void {
  }

}
