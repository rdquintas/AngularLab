import { CustomValidators } from './custom.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  customValidators = new CustomValidators();

  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, this.customValidators.isPasswordValid),
    newPassword: new FormControl('', Validators.required),
    confPassword: new FormControl('', Validators.required),
  }, this.customValidators.isPasswordMatchOK);
}

