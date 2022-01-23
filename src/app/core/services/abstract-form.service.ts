import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Observable, throwError } from 'rxjs'

export abstract class AbstractFormService<T, DtoT extends { id?: string }> {
    form: FormGroup

    constructor(protected fb: FormBuilder) {
        this.form = this.buildForm()
    }

    get valid(): boolean {
        if (this.form.untouched) return false
        return this.form.valid
    }

    getFormValue(): DtoT {
        return this.form.value
    }

    setFormValue(dto: DtoT | null): void {
        if (!dto) {
            this.form.reset()
            return
        }

        this.form.reset(dto)
        if (dto.id) {
            const control = new FormControl(dto.id)
            this.form.addControl('id', control)
        }
    }

    abstract buildForm(): FormGroup

    abstract loadFromApiAndFillForm$(id: string): Observable<T>

    save$(): Observable<T> {
        if (this.form.invalid) return throwError(() => new Error('Invalid form'))

        const id = this.form.get('id')?.value ?? null
        return id ? this.update$(id) : this.create$()
    }

    protected abstract create$(): Observable<T>

    protected abstract update$(id: string): Observable<T>
}
