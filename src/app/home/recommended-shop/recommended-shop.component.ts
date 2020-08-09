import { Time } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/app/core/models/shop';
import { ChatService } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-recommended-shop',
  templateUrl: './recommended-shop.component.html',
  styleUrls: ['./recommended-shop.component.scss']
})
export class RecommendedShopComponent implements OnInit {
  @Input() shop: Shop;
  descriptionLimit = 300;
  isDescriptionExtended = false;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  computeTime(time: Time) {
    let rs = '';
    rs += time.hours > 9 ? time.hours : '0' + time.hours;
    rs += ':';
    rs += time.minutes > 9 ? time.hours : '0' + time.minutes;
    return rs;
  }

  computeStars(starNumber: number) {
    const rs = '★★★★★☆☆☆☆☆';
    return rs.slice(5 - starNumber, 10 - starNumber);
  }

  computeDescription(des: string) {
    if (this.isDescriptionExtended)
      return des
    else
      return des.length > this.descriptionLimit ? des.slice(0, this.descriptionLimit) + '...' : des;
  }

  extendDescription() {
    this.isDescriptionExtended = true;
  }

  openChatBox(contactId: string) {
    this.chatService.onChatBoxOpened.emit(contactId);
  }
}
