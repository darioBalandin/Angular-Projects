import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  photoUrl = '';

  randomPhoto = {};

  constructor(
    private readonly photoService: PhotoService
  ) {
  }
  async ngOnInit() {
    await this.onClick()

  }



  async onClick() {

    this.photoUrl = (await this.photoService.getRandomPhoto()).urls.regular;
  }
}
