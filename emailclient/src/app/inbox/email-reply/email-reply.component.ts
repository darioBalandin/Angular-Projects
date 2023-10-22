import { Component } from '@angular/core';
import { Email } from '../email.type';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent {


  email: Email;
  showModal = false;


  onSubmit(email: Email) {




  }
}
