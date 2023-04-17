import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'ceiling',
    standalone: true,
})
export class CeilingPipe implements PipeTransform {
    transform(value: number): number {
        return Math.ceil(value)
    }
}
