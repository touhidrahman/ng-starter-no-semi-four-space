import { inject, Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
    name: 'safeUrl',
    standalone: true,
})
export class SafeUrlPipe implements PipeTransform {
    private sanitizer = inject(DomSanitizer)

    transform(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }
}
