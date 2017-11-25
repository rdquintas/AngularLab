import { AbstractControl, ValidationErrors } from '@angular/forms';
export class CustomValidators {
    isPasswordValid(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (control.value === '1234') {
                    resolve(null);
                } else {
                    resolve({ isPasswordValid: true });
                }
            }, 500);
        });
    }

    isPasswordMatchOK(control: AbstractControl): ValidationErrors | null {
        const newPass = control.get('newPassword');
        const confPass = control.get('confPassword');
        console.log('cenas');
        if (confPass.value === newPass.value) {
            return null;
        } else {
            return { isPasswordMatchOK: true };
        }
    }
}
