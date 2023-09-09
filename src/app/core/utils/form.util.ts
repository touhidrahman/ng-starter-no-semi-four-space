import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms'

/**
 * Marks all the controls and their nested controls as dirty.
 * @param abstractControls - an array of controls(can be FormControls, FormGroups or FormArrays)
 */
export function markAllControlsAsDirty(abstractControls: AbstractControl[]): void {
    abstractControls.forEach((abstractControl) => {
        let control
        if (abstractControl instanceof FormControl) {
            control = abstractControl as FormControl
            control.markAsDirty({ onlySelf: true })
            control.markAsTouched({ onlySelf: true })
            control.updateValueAndValidity({ onlySelf: true })
        } else if (abstractControl instanceof FormGroup) {
            control = abstractControl as FormGroup
            markAllControlsAsDirty(Object.values(control.controls))
        } else if (abstractControl instanceof FormArray) {
            control = abstractControl as FormArray
            markAllControlsAsDirty(control.controls)
        }
    })
}
