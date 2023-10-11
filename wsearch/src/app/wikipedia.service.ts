import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  pages: WikiSearchType[] = [];

  private readonly WIKIPEDIA_BASE_URL = 'https://en.wikipedia.org/w/api.php';

  constructor(private httpClient: HttpClient) { }


  public async search(term: string):Promise<WikiSearchType[]> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      utf8: '1',
      srsearch: term,
      origin: '*'

    }
    this.pages = (await firstValueFrom(this.httpClient.get(`${this.WIKIPEDIA_BASE_URL}?action=query&format=json&list=search&utf8=1&srsearch=${term}`, { params })) as WikiResponse).query.search;
     return this.pages;
  }

}

export type WikiResponse = {
  query: {
    search: WikiSearchType[]
  }
}

export type WikiSearchType = {
  ns: number,
  pageid: number,
  size: number,
  snippet: string,
  timestamp: string,
  title: string,
  wordcount: number

}
