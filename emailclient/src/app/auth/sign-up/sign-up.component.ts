import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService, Credentials } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(
    private readonly passwordValidator: MatchPassword,
    private readonly uniqueUsernameValidator: UniqueUsername,
    private readonly authService: AuthService
  ) { }

  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ], [this.uniqueUsernameValidator.validate]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
  }, { validators: [this.passwordValidator.validate] });


  async onSubmit() {

    if (this.authForm.invalid) {
      return;
    }

    let credentials: Credentials = {
      username: this.authForm.value.username as unknown as string,
      password: this.authForm.value.password as unknown as string,
      passwordConfirmation: this.authForm.value.passwordConfirmation as unknown as string

    }

    try {
      await this.authService.signUp(credentials);

    } catch (error) {
      this.authForm.setErrors({ signUpUnsuccessful: true })
    }

  };

}

