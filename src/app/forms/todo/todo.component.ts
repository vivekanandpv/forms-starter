import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { numbersOnly } from 'src/app/_validators/custom.validators';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  form: FormGroup;
  countries = ['India', 'Japan', 'USA', 'France'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      date: [''],
      comments: ['', [Validators.required], [this.customValidator.bind(this)]],
    });
  }

  get date(): FormControl {
    return this.form.controls['date'] as FormControl;
  }

  get comments(): FormControl {
    return this.form.controls['comments'] as FormControl;
  }

  customValidator(ctrl: AbstractControl): Observable<ValidationErrors> {
    //  get the current value of the control
    const value = ctrl.value;
    //  apply the validation
    const result = this.countries.find((c) => c.includes(value));
    //  return error, if necessary
    if (!result) {
      return of({
        'my-custom-error': true,
      }).pipe(delay(50));
    } else {
      //  important!
      return of(null).pipe(delay(50));
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
