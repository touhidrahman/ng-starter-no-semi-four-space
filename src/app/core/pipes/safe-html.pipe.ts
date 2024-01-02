import { Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
    name: 'safeHtml',
    standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    transform(input: string) {
        return this.sanitizer.bypassSecurityTrustHtml(input)
    }
}
