import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { VerifyEmailPageComponent } from './verify-email-page.component'

const routes: Routes = [{ path: '', component: VerifyEmailPageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VerifyEmailPageRoutingModule {}
