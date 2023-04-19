import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';



export const matchpassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    let password = control.get('password');
    let confirmPassword = control.get('confirmpassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
        return { passwordmatcherror: true };
    }

    return null;
}