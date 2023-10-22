import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, Credentials, SignUpResponse } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {




  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
  })


  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  async onSubmit():Promise<void> {
    if (this.loginForm.invalid) {
      return;
    }
    let credentials: Credentials = {
      username: this.loginForm.value.username as unknown as string,
      password: this.loginForm.value.password as unknown as string,
    }
    try {
      await this.authService.signIn(credentials);
      this.router.navigateByUrl('/inbox')
    } catch (error) {
      this.loginForm.setErrors({ invalidLogin: true })
    }
  }
}
