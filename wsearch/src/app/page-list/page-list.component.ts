import { Component, Input } from '@angular/core';
import { WikiSearchType } from '../wikipedia.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {


  @Input()
  pages: WikiSearchType[] = [];
}
