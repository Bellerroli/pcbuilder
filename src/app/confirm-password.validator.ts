import {ValidationErrors, ValidatorFn} from "@angular/forms";

export function confirmPasswordValidator(password: string, repassword: string): ValidatorFn {
  return (): ValidationErrors | null => {
    return repassword == password ? null : {noMatch: "Confirm password is not a match!"};
  }
}
