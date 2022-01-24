import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SpreadIntoArrayPipe } from '@core/pipes/spread-into-array.pipe'
import { CeilingPipe } from './ceiling.pipe'
import { Nl2brPipe } from './nl2br.pipe'
import { SafeUrlPipe } from './safe-url.pipe'
import { SanityImagePipe } from './sanity-image.pipe'
import { UniquePipe } from './unique.pipe'
import { ValueInPipe } from './value-in.pipe'

@NgModule({
    declarations: [SafeUrlPipe, SpreadIntoArrayPipe, CeilingPipe, Nl2brPipe, UniquePipe, ValueInPipe, SanityImagePipe],
    exports: [SafeUrlPipe, SpreadIntoArrayPipe, CeilingPipe, Nl2brPipe, UniquePipe, ValueInPipe, SanityImagePipe],
    imports: [CommonModule],
})
export class PipesModule {}
