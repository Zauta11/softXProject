import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function notMatch(
  controlOne: string,
  controlTwo: string,
  keyToMatch: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const first = formGroup.get(controlOne);
    const second = formGroup.get(controlTwo);

    if (!first || !second) {
      return null;
    }

    if (first?.errors && !first.errors['notMatch']) {
      return null;
    }

    if (first.value !== keyToMatch) {
      first.setErrors({ notMatch: true });
    } else if (second.value !== keyToMatch) {
      second.setErrors({ notMatch: true });
    } else {
      first.setErrors(null);
      second.setErrors(null);
    }

    return null;
  };
}
