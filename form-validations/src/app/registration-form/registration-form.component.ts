import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  optionValues = [
    { id: 1, language: 'telugu' },
    { id: 2, language: 'hindi' },
    { id: 3, language: 'english' }

  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: any) {
    console.log(f.value);
  }

}
