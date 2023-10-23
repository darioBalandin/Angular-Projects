import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Email } from '../email.type';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnChanges {


  @Input()
  email: Email;

  showModal = false;

  constructor(

    private readonly emailService: EmailService
  ) { }


  ngOnChanges(changes: SimpleChanges): void {
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n-------- ${this.email.from} wrote:\n> ${this.email.text.replace(/\n/gi, '\n> ')}`
    }
  }


  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
