import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'spreadIntoArray',
    standalone: true,
})
export class SpreadIntoArrayPipe implements PipeTransform {
    transform(value: number, startIndex = 0): number[] {
        const result: number[] = []
        for (let i = startIndex; i < value; i++) {
            result.push(i + 1)
        }

        return result
    }
}
