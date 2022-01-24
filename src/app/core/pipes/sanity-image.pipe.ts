import { Pipe, PipeTransform } from '@angular/core'
import { SanityService } from '@core/services/sanity.service'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

@Pipe({ name: 'sanityImage' })
export class SanityImagePipe implements PipeTransform {
    constructor(private sanityService: SanityService) {}

    transform(value: SanityImageSource, width?: number): string {
        if (width) {
            return this.sanityService.buildImage(value).width(width).url()
        }
        return this.sanityService.buildImageUrl(value)
    }
}
