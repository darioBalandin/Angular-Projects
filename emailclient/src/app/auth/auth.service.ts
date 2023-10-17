import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ROOT_URL = 'https://api.angular-email.com';

  constructor(private readonly http: HttpClient) { }




  async usernameAvailable(username: string): Promise<null> {

    try {
      await firstValueFrom(this.http.post(`${this.ROOT_URL}/auth/username`, { username: username }));
      return null;

    } catch (error: unknown) {
      throw new Error("not unique")
    }
  }
}
