import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { UserNameValidators } from './username.validators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  // customValidators = new UserNameValidators();

  form = new FormGroup({
    // username: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(3),
    //   this.customValidators.cannotContainSpace
    // ], this.customValidators.shouldBeUnique),
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confPassword: new FormControl('', Validators.required),
  });
}

