import { Component, OnInit, Input } from '@angular/core';
import { TimeUtil } from 'src/app/core/common/TimeUtil';

@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html',
  styleUrls: ['./notification-box.component.scss']
})
export class NotificationBoxComponent implements OnInit {
  @Input() notification;
  @Input() type: 'chat'|'notification';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('clicked!')
  }

  computeTime(time: number): string {
    return TimeUtil.computeTimeAgo(time);
  }

  computeContent(str: string): string {
    const limit = 100;
    return str.length > limit ? str.slice(0, limit) + '...' : str;
  }

}
