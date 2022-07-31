import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-reactive',
  templateUrl: './signup-reactive.component.html',
  styleUrls: ['./signup-reactive.component.css']
})
export class SignupReactiveComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }

}
