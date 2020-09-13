import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  roles = ['admin', 'manager', 'user'];

  constructor(private fb: FormBuilder, private restService: RestService) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['admin'],
    });
  }

  get username(): FormControl {
    return this.form.controls['username'] as FormControl;
  }

  get password(): FormControl {
    return this.form.controls['password'] as FormControl;
  }

  get role(): FormControl {
    return this.form.controls['role'] as FormControl;
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      this.restService
        .login(this.role.value, this.form.value)
        .subscribe((response) => {
          console.log('Server', response);
        });
    } else {
      alert('Invalid form');
    }
  }
}
