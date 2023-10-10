import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {

  stats: StatsType[] = [
    {
      value: 22,
      label: '# of Users'

    },
    {
      value: 900,
      label: 'Revenue'
    },
    {
      value: 50,
      label: 'Reviews'
    }
  ]

  items : ItemType[]= [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: ' This is a fantastic couch to sit on'

    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff on'
    }
  ]

}
export type StatsType = {

  value: number,
  label: string
}
export type ItemType = {
  image: string,
  title: string,
  description: string
}
