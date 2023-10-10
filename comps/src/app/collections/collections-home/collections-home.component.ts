import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {

  data: DataType[] = [
    {
      name: 'James',
      age: 24,
      job: 'Designer',
      employed: true

    },
    {
      name: 'Jill',
      age: 27,
      job: 'Engineer',
      employed: false

    },
    {
      name: 'Elyse',
      age: 21,
      job: 'HR',
      employed: true

    }
  ]

  headers: HeadersType[] = [
    {
      key: 'employed',
      label: 'Has a Job?'
    },
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'age',
      label: 'Age'
    },
    {
      key: 'job',
      label: 'Job'
    },

  ]

}

export type DataType = {
  // [key: string]: string | number
  name: string,
  age: number,
  job: string,
  employed: boolean
}

export type HeadersType = {
  key: string,
  label: string
}
