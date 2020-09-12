import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { numbersOnly } from 'src/app/_validators/custom.validators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  form: FormGroup;
  regex = /^[0-9]*$/;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      date: [''],
      comments: [
        'Default Comment',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50),
          this.customValidator.bind(this),
        ],
      ],
    });
  }

  get date(): FormControl {
    return this.form.controls['date'] as FormControl;
  }

  get comments(): FormControl {
    return this.form.controls['comments'] as FormControl;
  }

  customValidator(ctrl: AbstractControl): ValidationErrors {
    //  get the current value of the control
    const value = ctrl.value;
    //  apply the validation
    const result = this.regex.test(value);
    //  return error, if necessary
    if (!result) {
      return {
        'my-custom-error': true,
      };
    } else {
      //  important!
      return null;
    }
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submit', this.form.value);
    } else {
      alert('Invalid form');
    }
  }
}
