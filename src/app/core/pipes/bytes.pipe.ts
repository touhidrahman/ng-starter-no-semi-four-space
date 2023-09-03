import { Pipe, PipeTransform } from '@angular/core'

export type ByteUnit = 'B' | 'kB' | 'KB' | 'MB' | 'GB' | 'TB'

@Pipe({
    name: 'bytes',
    standalone: true,
})
export class BytesPipe implements PipeTransform {
    static formats: { [key: string]: { max: number; prev?: ByteUnit } } = {
        B: { max: 1024 },
        kB: { max: 1024 ** 2, prev: 'B' },
        KB: { max: 1024 ** 2, prev: 'B' }, // Backward compatible
        MB: { max: 1024 ** 3, prev: 'kB' },
        GB: { max: 1024 ** 4, prev: 'MB' },
        TB: { max: Number.MAX_SAFE_INTEGER, prev: 'GB' },
    }

    transform(input: number, decimal = 0, from: ByteUnit = 'B', to?: ByteUnit): any {
        if (input > Number.MAX_SAFE_INTEGER || decimal < 0) {
            return input
        }

        let bytes = input
        let unit = from
        while (unit !== 'B') {
            bytes *= 1024
            unit = BytesPipe.formats[unit].prev as ByteUnit
        }

        if (to) {
            const format = BytesPipe.formats[to]

            const result = BytesPipe.calculateResult(format, bytes).toFixed(decimal)

            return BytesPipe.formatResult(result, to)
        }

        for (const key in BytesPipe.formats) {
            if (BytesPipe.formats[key]) {
                const format = BytesPipe.formats[key]
                if (bytes < format.max) {
                    const result = BytesPipe.calculateResult(format, bytes).toFixed(decimal)

                    return BytesPipe.formatResult(result, key)
                }
            }
        }
    }

    static formatResult(result: number | string, unit: string): string {
        return `${result} ${unit}`
    }

    static calculateResult(format: { max: number; prev?: ByteUnit }, bytes: number) {
        const prev = format.prev ? BytesPipe.formats[format.prev] : undefined
        return prev ? bytes / prev.max : bytes
    }
}
