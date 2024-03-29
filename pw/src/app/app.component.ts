import { Component, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  length = 0;

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue) ) {
      this.length = parsedValue;
    }


  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;

  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {

    // console.log(`

    // About to generate password with :
    // Includes letters: ${this.includeLetters}
    // Includes numbers: ${this.includeNumbers}
    // Includes symbols: ${this.includeSymbols}
    // The length is: ${this.length}
    // `);

    const numbers='1234567890'
    const letters='abcdefghijklmnopqrstuvwxyz';
    const symbols='!@#$&%*()';

    let validChars='';

    if(this.includeLetters){
      validChars+= letters;
    }
    if(this.includeNumbers){
      validChars+=numbers;
    }
    if(this.includeSymbols){
      validChars+=symbols;
    }

    let generatedPassword='';

    for(let i=0;i<this.length;i++){
      const index= Math.floor(Math.random()*validChars.length);

      generatedPassword+=validChars[index]
    }

    this.password = generatedPassword;

  }

}
