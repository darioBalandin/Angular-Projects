import { Component, Input } from '@angular/core';
import { WikiSearchType, WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: WikiSearchType[] = [];


  constructor(private readonly wikipediaService: WikipediaService) { }


  async onTerm(term: string) {

    console.log(`I am the app and this is the term: ${term}`);

    this.pages = await this.wikipediaService.search(term);
  }

}
