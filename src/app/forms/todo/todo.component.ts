import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      date: [''],
      comments: ['Default Comment'],
    });
  }

  get date(): FormControl {
    return this.form.controls['date'] as FormControl;
  }

  get comments(): FormControl {
    return this.form.controls['comments'] as FormControl;
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('Form submit', this.form.value);
  }
}
