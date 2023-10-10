import { Component, Input } from '@angular/core';
import { DataType, HeadersType } from '../collections-home/collections-home.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() classNames='';

  @Input() data: DataType[] = [];

  @Input() headers: HeadersType[] = [];

}
