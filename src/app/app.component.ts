import { ChatService } from './core/services/chat.service';
import { ChatBoxComponent } from './shared/chat-box/chat-box.component';
import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ChatBoxContainerDirective } from './core/directives/chat-box-container.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private chatService: ChatService) {
    this.chatService.onChatBoxOpened.subscribe(evt => this.openChatBox(evt));
  }

  @ViewChild(ChatBoxContainerDirective) chatBoxContainerDirective: ChatBoxContainerDirective;

  title = 'mewocare-ui';

  openChatBox(contactId: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChatBoxComponent);
    this.chatBoxContainerDirective.viewContainerRef.clear();
    const componentRef = this.chatBoxContainerDirective.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.contactId = contactId;
  }
}
