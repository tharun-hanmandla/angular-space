import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonText = ''
  signupForm = true;
  title = 'form-validations';
  onClick(selectedButton: string) {

    if (selectedButton == 'login') {
      this.buttonText = selectedButton;
      this.signupForm = false
    }
    else if (selectedButton == 'register') {
      this.buttonText = selectedButton;
      this.signupForm = false
    }
    else {
      this.buttonText = selectedButton;
      this.signupForm = false
    }
  }
}
