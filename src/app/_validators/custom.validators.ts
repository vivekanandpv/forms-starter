import { AbstractControl } from '@angular/forms';

export const numbersOnly = (ctrl: AbstractControl) => {
  return /^[0-9]*$/.test(ctrl.value)
    ? null
    : {
        'my-custom-error': true,
      };
};
