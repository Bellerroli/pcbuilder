import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

// export const confirmPasswordValidator: ValidatorFn = (
//   control: AbstractControl
// ): ValidationErrors | null => {
//   return control.value.password === control.value.rePassword
//     ? null
//     : { PasswordNoMatch: true };
// };

export function confirmPasswordValidator(): ValidatorFn {
  return (control:AbstractControl):ValidationErrors | null =>{
      return control.get('password')?.value === control.get('rePassword')?.value ? null : {passwordNoMatch: true};
  };
}
