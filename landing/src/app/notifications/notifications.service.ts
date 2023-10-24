import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  messages: Subject<Command>;



  constructor() {
    this.messages = new Subject<Command>();
  }

  addSuccess(message: string) {
    this.messages.next({
      id: this.randomId(),
      type: 'success',
      text: message
    })
  }

  addError(message: string) {
    this.messages.next({
      id: this.randomId(),
      type: 'error',
      text: message
    })

  }


  clearMessage(id: number) {

    this.messages.next({
      id:id,
      type:'clear'
    })

  }


  private randomId(){
    return Math.round(Math.random()*10000);
  }
}

export type Command = {
  id: number,
  type: 'success' | 'error' | 'clear'
  text?: string,
}
