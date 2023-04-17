import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'valueIn',
    standalone: true,
})
export class ValueInPipe implements PipeTransform {
    transform(needle: unknown, haystack: unknown[]): boolean {
        return haystack.includes(needle)
    }
}
