import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {

  modalOpen = false;

  items : AccordionItem[]= [

    {
      title: 'Why is the sky blue',
      content: 'Thats what it is'

    },
    {
      title: 'Why does an orange taste like',
      content: 'It tastes like an orange'

    },
    {
      title: 'What color is that cat',
      content: 'It is orange'

    }
  ]

  onClick() {
    console.log(this.modalOpen)
    this.modalOpen = !this.modalOpen;

  }
}

export type AccordionItem = {
  title: string,
  content: string
}
