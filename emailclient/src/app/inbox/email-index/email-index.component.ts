import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { EmailPreview } from '../email.type';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {

  emailList: EmailPreview[] = [];


  constructor(
    private readonly emailService: EmailService
  ) { }
  ngOnInit() {
    this.emailService.getEmails().subscribe(emails => {
      this.emailList = emails
    });
  }



}
