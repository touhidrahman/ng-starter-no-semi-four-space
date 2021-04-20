import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HideDirective } from './hide/hide.directive'
import { LetDirective } from './let/let.directive'
import { RepeatDirective } from './repeat/repeat.directive'

@NgModule({
    declarations: [HideDirective, LetDirective, RepeatDirective],
    imports: [CommonModule],
    exports: [HideDirective, LetDirective, RepeatDirective],
    providers: [],
})
export class CoreDirectivesModule {}
