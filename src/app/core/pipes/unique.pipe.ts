import { unique } from 'radash'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'unique',
    standalone: true,
})
export class UniquePipe<T> implements PipeTransform {
    transform(value: T[]): T[] {
        return unique(value)
    }
}
