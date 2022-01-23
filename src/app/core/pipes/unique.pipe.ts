import { uniq } from 'lodash-es'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'unique',
})
export class UniquePipe<T> implements PipeTransform {
    transform(value: T[]): T[] {
        return uniq(value)
    }
}
