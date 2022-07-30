import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonText = ''
  title = 'form-validations';
  onClick(selectedButton: string) {
    selectedButton == 'login' ? this.buttonText = selectedButton : this.buttonText = selectedButton
  }
}
