import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Observable, tap, throwError } from 'rxjs'
import { AbstractApiService } from './api.service'

export abstract class AbstractFormService<T> {
    form: FormGroup

    constructor(
        protected fb: FormBuilder,
        protected apiService: AbstractApiService<T>,
    ) {
        this.form = this.buildForm()
    }

    get valid(): boolean {
        if (this.form.untouched) return false
        return this.form.valid
    }

    getFormValue(): T {
        return this.form.value
    }

    setFormValue(dto: (T & { id?: string }) | null): void {
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

    fillFormById$(id: string): Observable<T> {
        return this.apiService
            .findById(id)
            .pipe(tap((value) => this.setFormValue(value as T & { id?: string })))
    }

    save$(): Observable<T> {
        if (this.form.invalid) return throwError(() => new Error('Invalid form'))

        const id = this.form.get('id')?.value ?? null
        return id ? this.update$(id) : this.create$()
    }

    protected create$(): Observable<T> {
        return this.apiService.create(this.getFormValue()).pipe(tap(() => this.setFormValue(null)))
    }

    protected update$(id: string): Observable<T> {
        return this.apiService
            .update(id, this.getFormValue())
            .pipe(tap(() => this.setFormValue(null)))
    }
}
