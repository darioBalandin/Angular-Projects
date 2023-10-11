import { Component, Input } from '@angular/core';
import { AccordionItem } from '../mods-home/mods-home.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  openedItemIndex: number = 0;



  @Input() data: AccordionItem[] = [];

  onClick(index: number) {

    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {

      this.openedItemIndex = index;
    }
  }
}
