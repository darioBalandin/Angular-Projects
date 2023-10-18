import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {


  constructor(private readonly authService: AuthService, private router: Router) { }


  async ngOnInit() {

    await this.authService.signOut();

    this.router.navigateByUrl('/')
  }




}
