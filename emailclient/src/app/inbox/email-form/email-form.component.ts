import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Email } from '../email.type';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  emailForm: FormGroup;

  @Input()
  email: Email;

  @Output()
  emailSubmit = new EventEmitter<Email>();

  ngOnInit(): void {

    const { subject, to, from, text } = this.email;

    this.emailForm = new FormGroup(
      {
        to: new FormControl<string | null>(to, [Validators.required, Validators.email]),
        from: new FormControl<string | null>({ value: from, disabled: true }),
        subject: new FormControl<string | null>(subject, [Validators.required]),
        text: new FormControl<string | null>(text, [Validators.required])

      }
    )

  }


  onSubmit() {

    if (this.emailForm.invalid) {
      return;
    }

    this.emailSubmit.emit(this.emailForm.value);

  }
}
