import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText = lorem.sentence();

  enteredText = '';
  onInput(text: string): void {
    console.log(text)
    this.enteredText = text;

  }
  compare(randomLetter: string, enteredLetter: string): ColorClass {
    if (!enteredLetter) {
      return ColorClass.PENDING;

    }
    return randomLetter === enteredLetter ? ColorClass.CORRECT : ColorClass.INCORRECT;
  }

}

export enum ColorClass {
  INCORRECT = 'incorrect',
  CORRECT = 'correct',
  PENDING = 'pending'
}
