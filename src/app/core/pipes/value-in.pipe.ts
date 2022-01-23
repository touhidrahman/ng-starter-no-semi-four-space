import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'valueIn',
})
export class ValueInPipe implements PipeTransform {
    transform(needle: unknown, haystack: unknown[]): boolean {
        return haystack.includes(needle)
    }
}
