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
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  form: FormGroup;
  categories = ['Books', 'Pens', 'Office Stationery', 'Music', 'Toys'];

  constructor(private fb: FormBuilder, private restService: RestService) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: [
        '',
        [
          Validators.min(0),
          Validators.pattern(/^[0-9]{1,5}([.]{1}[0-9]{1,2})?$/),
        ],
      ],
      taxRate: [
        '',
        [
          Validators.min(0),
          Validators.max(75),
          Validators.pattern(/^[0-9]{1,2}([.]{1}[0-9]{1,2})?$/),
        ],
      ],
    });
  }

  get name(): FormControl {
    return this.form.controls['name'] as FormControl;
  }

  get category(): FormControl {
    return this.form.controls['category'] as FormControl;
  }

  get price(): FormControl {
    return this.form.controls['price'] as FormControl;
  }

  get taxRate(): FormControl {
    return this.form.controls['taxRate'] as FormControl;
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      this.restService.createProduct(this.form.value).subscribe((response) => {
        console.log('Server', response);
        this.form.reset();
        alert('Successfully created');
      });
    } else {
      alert('Invalid form');
    }
  }
}
