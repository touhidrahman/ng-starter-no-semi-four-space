import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SpreadIntoArrayPipe } from '@core/pipes/spread-into-array.pipe'
import { CeilingPipe } from './ceiling.pipe'
import { SafeUrlPipe } from './safe-url.pipe'

@NgModule({
    declarations: [SafeUrlPipe, SpreadIntoArrayPipe, CeilingPipe],
    imports: [CommonModule],
    exports: [SafeUrlPipe, SpreadIntoArrayPipe, CeilingPipe],
    providers: [],
})
export class PipesModule {}
