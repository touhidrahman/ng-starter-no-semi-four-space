import { Pipe, PipeTransform } from '@angular/core'
import { unique } from 'radash'

@Pipe({
    name: 'unique',
    standalone: true,
})
export class UniquePipe<T> implements PipeTransform {
    transform(value: T[]): T[] {
        return unique(value)
    }
}
