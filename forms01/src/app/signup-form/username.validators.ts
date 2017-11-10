import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UserNameValidators {
    cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'ricardo') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
