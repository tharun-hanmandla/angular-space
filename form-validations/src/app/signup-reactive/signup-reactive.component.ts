import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-reactive',
  templateUrl: './signup-reactive.component.html',
  styleUrls: ['./signup-reactive.component.css']
})
export class SignupReactiveComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', Validators.required),
    firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('Tharun')]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('Hanmandla')])
  })
  constructor() { }

  ngOnInit(): void {
  }

  get email() {
    return this.form.get('email');
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get lastname() {
    return this.form.get('lastname');
  }

  signUp() {
    this.form.setErrors({
      invalidData: true
    });
  }
}
