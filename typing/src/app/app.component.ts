import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText = lorem.sentence();

  successTyping: boolean = false;
  onInput(text: string) {
    console.log(text)
    if(text === this.randomText){
      this.successTyping=true;
    }else{

      this.successTyping= false;
    }
  }
}
