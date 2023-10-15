import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private readonly UNSPLASH_BASE_URL = 'https://api.unsplash.com';
  private readonly RANDOM_ENDPOINT = '/photos/random';

  constructor(
    private readonly httpClient: HttpClient
  ) { }




  async getRandomPhoto(): Promise<PhotoResponse> {



    const photo = await firstValueFrom(
      this.httpClient.get(`${this.UNSPLASH_BASE_URL}${this.RANDOM_ENDPOINT}`, {
        headers: {
          Authorization: `Client-ID ${environment.apiKey}`,
        },
      }),
    ) as PhotoResponse;

    return photo;

  }

}
export type PhotoResponse = {
  urls: {
    full: string,
    raw: string,
    regular: string,
    small: string,
    thumb: string
  }

}
