import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { notMatch } from 'src/app/core/util/validators';
import { Router } from '@angular/router';
import { AuthForm } from 'src/app/core/interfaces';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninComponent {

  isSubmit = false;

  readonly form = new FormGroup<AuthForm>(
    {
      username: new FormControl<string>('', {
        nonNullable: true,
        validators: [ Validators.required ]
      }),
      password: new FormControl<string>('', {
        nonNullable: true,
        validators: [ Validators.required ]
      }),
    }, 
    {
      validators: notMatch('username', 'password', 'admin')
    }
  )

  get userNameControl(): AbstractControl {
    return this.form.controls.username;
  }

  get passwordControl(): AbstractControl {
    return this.form.controls.password;
  }

  constructor (
    private readonly router: Router
  ) {}

  onSubmit(): void {
    this.isSubmit = true;

    if (this.form.invalid) {
      return;
    }

    // TODO:
    // 1. send Request to get auth token and put in localstorage
    // 2. create interceptor to pass token on every request
    // 3. create token listener to check token refreshnes
    // 4. navigate to users page or show error message that user doesn't exist

    localStorage.setItem('token', 'fakeToken-zt12934h1ljnfasalsfaslfnl23mmlalsjfnalsjnflas')

    this.router.navigate([ '/users' ])
  }
}
