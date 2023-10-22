import { Component } from '@angular/core';
import { Email } from '../email.type';
import { AuthService } from '../../../app/auth/auth.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent {


  showModal = false;

  email: Email
  constructor(
    private readonly authService: AuthService,
    private readonly emailService: EmailService
  ) {

    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: `${this.authService.username}@angular-email.com`
    }

  }


  onSubmit(email: Email) {

    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
