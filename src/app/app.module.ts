import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './components/app.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { UIModule } from './modules/ui/ui.module'

@NgModule({
    declarations: [AppComponent, PageNotFoundComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        PageNotFoundComponent,
        UIModule,

        // ROUTING (Very last)
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
