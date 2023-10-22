import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { switchMap } from 'rxjs';
import { Email } from '../email.type';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  email!: Email;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly emailService: EmailService
  ) {
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    })
  }



  ngOnInit() {

    // console.log(this.route.snapshot.data);


    // this.route.params.pipe(
    //   switchMap(
    //     ({ id }) => {
    //       return this.emailService.getEmailById(id);
    //     }
    //   )
    // ).subscribe(email => {
    //   console.log(email);
    //   this.email = email;
    // });
  }





}
