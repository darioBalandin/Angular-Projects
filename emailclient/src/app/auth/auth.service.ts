import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ROOT_URL = 'https://api.angular-email.com';


  signedIn$ = new BehaviorSubject(false);

  constructor(private readonly http: HttpClient) { }

  async usernameAvailable(username: string): Promise<null> {

    try {
      await firstValueFrom(this.http.post(`${this.ROOT_URL}/auth/username`, { username: username }));
      return null;

    } catch (error: unknown) {
      throw new Error("not unique")
    }
  }

  async signUp(credentials: Credentials): Promise<SignUpResponse> {
    try {
      const response = await firstValueFrom(
        this.http.post<SignUpResponse>(`${this.ROOT_URL}/auth/signup`, credentials,
        ));
      this.signedIn$.next(true);

      return response;
    } catch (error) {
      throw new Error("error")
    }
  }

  async checkAuth() {

    const response = await firstValueFrom(this.http.get<SignedInResponse>(`${this.ROOT_URL}/auth/signedin`));

    if (response.authenticated) {
      this.signedIn$.next(true);
    }
    console.log(response)

  }


  async signOut() {
    try {
      const response = await firstValueFrom(this.http.post<any>(`${this.ROOT_URL}/auth/signout`, {}));
      this.signedIn$.next(false);
    } catch (error) {
      console.log(error)
    }
  }



}

export type Credentials = {
  username: string,
  password: string,
  passwordConfirmation: string
}

export type SignUpResponse = {
  username: string
}

export type SignedInResponse = {
  authenticated: boolean,
  username: string
}
