import { Component } from '@angular/core'
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { SpartanImports } from '@core/ui/spartan-imports'

@Component({
    selector: 'app-categories-edit',
    templateUrl: './categories-edit.html',
    imports: [...SpartanImports, ReactiveFormsModule],
})
export class CategoriesEdit {
    categoryForm: FormGroup
    isEditMode = false
    categoryId: string | null = null

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.categoryForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            description: [''],
            isActive: [true],
        })

        this.categoryId = this.route.snapshot.paramMap.get('id')
        this.isEditMode = !!this.categoryId

        if (this.isEditMode) {
            this.loadCategory()
        }
    }

    loadCategory(): void {
        // TODO: Load category data from service
        // Example:
        // this.categoryService.getById(this.categoryId).subscribe(category => {
        //     this.categoryForm.patchValue(category)
        // })
    }

    onSubmit(): void {
        if (this.categoryForm.valid) {
            const formValue = this.categoryForm.value

            if (this.isEditMode) {
            } else {
                // TODO: Create category
                // this.categoryService.create(formValue).subscribe(...)
            }
            this.router.navigate(['/categories'])
        }
    }

    onCancel(): void {
        this.router.navigate(['/categories'])
    }
}
