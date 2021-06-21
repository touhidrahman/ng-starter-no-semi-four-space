import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HideDirective } from './hide.directive'
import { LetDirective } from './let.directive'
import { RepeatDirective } from './repeat.directive'

@NgModule({
    declarations: [HideDirective, LetDirective, RepeatDirective],
    imports: [CommonModule],
    exports: [HideDirective, LetDirective, RepeatDirective],
    providers: [],
})
export class CoreDirectivesModule {}
