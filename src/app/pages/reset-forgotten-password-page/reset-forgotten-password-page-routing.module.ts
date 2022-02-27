import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ResetForgottenPasswordPageComponent } from './reset-forgotten-password-page.component'

const routes: Routes = [{ path: '', component: ResetForgottenPasswordPageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ResetForgottenPasswordPageRoutingModule {}
