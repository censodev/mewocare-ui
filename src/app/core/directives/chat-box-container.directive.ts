import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appChatBoxContainer]'
})
export class ChatBoxContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
